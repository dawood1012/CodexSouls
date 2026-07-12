import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { name: 'Expertise', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'Company', path: '/about' },
  { name: 'Blog', path: '#', disabled: true },
  { name: 'Contact', path: '/contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastScrollY = useRef(0)
  const location = useLocation()

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
        scrolled ? 'bg-black/60 backdrop-blur-xl' : 'bg-transparent'
      }`}
      style={{ height: '116px' }}
    >
      <nav className="max-w-7xl mx-auto px-8 lg:px-12 h-full flex items-center w-full">
        {/* Logo takes up exactly the left half of the space */}
        <div className="flex-1 flex items-center">
          <Link to="/" className="flex items-center group shrink-0 hover:scale-105 transition-transform duration-300">
            <Logo height={42} className="brightness-200" />
          </Link>
        </div>

        {/* Desktop links take up the right half of the space (starting from the center) and are evenly distributed far from each other */}
        <div className="hidden md:flex flex-1 items-center justify-between">
          {links.map((link) => {
            if (link.disabled) {
              return (
                <span
                  key={link.name}
                  className="text-[16px] font-medium text-white/30 cursor-not-allowed select-none"
                  title="Coming soon"
                >
                  {link.name}
                </span>
              )
            }

            // Always solid white font color
            return (
              <Link
                key={link.name}
                to={link.path}
                className="text-[16px] font-medium text-white hover:text-white/70 transition-colors duration-300"
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            className="text-white hover:text-white/80"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Full-screen overlay mobile navigation */}
      {open && (
        <div className="fixed inset-x-0 top-[116px] bottom-0 bg-black/95 backdrop-blur-2xl px-8 py-10 flex flex-col gap-6 z-50 animate-fade-in">
          {links.map((link) => {
            if (link.disabled) {
              return (
                <span
                  key={link.name}
                  className="text-4xl font-medium tracking-tight py-3 text-white/30 cursor-not-allowed"
                >
                  {link.name}
                </span>
              )
            }
            return (
              <Link
                key={link.name}
                to={link.path}
                className="text-4xl font-medium tracking-tight transition-colors py-3 text-white hover:text-violet-400"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
