import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

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
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group shrink-0">
          <span className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M8 17L4 13L8 9" className="stroke-black dark:stroke-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 7L20 11L16 15" className="stroke-black dark:stroke-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 7L11 17" className="stroke-black dark:stroke-white" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="font-semibold text-black dark:text-white text-[15px] tracking-tight">
            CodexSouls
          </span>
        </a>

        {/* Desktop links — pushed left with mr-auto + ml-20 */}
        <ul className="hidden md:flex items-center gap-12 ml-20 mr-auto">
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
        </ul>

        {/* Theme toggle */}
        <div className="hidden md:block">
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
        </div>
      )}
    </header>
  )
}
