import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

const links = ['Services', 'Work', 'Company', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)
      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-white/70 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200/60 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group shrink-0 hover:scale-105 transition-transform duration-300">
          <Logo height={56} />
        </Link>

        {/* Right side — links + toggle grouped together */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-2">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-black dark:text-white font-medium transition-all duration-200 px-4 py-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                className="text-sm text-black dark:text-white font-medium transition-all duration-200 px-4 py-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center"
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className="w-px h-5 bg-black/10 dark:bg-white/10" />
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-black/5 dark:border-white/5 px-8 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-black dark:text-white text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <Link
            to="/blog"
            className="text-black dark:text-white text-sm font-medium transition-colors"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </header>
  )
}
