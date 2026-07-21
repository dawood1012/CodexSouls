import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { name: 'Expertise', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'Company', path: '/about' },
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

  /** Check if a link is currently active */
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled ? 'bg-black/60 backdrop-blur-xl' : 'bg-transparent'
      }`}
      style={{ height: '116px' }}
    >
      <nav className="max-w-none w-full mx-auto px-2 md:px-4 lg:px-6 h-full flex items-center">
        {/* Logo takes up exactly the left half of the space */}
        <div className="flex-1 flex items-center">
          <Link to="/" className="flex items-center group shrink-0 hover:scale-105 transition-transform duration-300">
            <Logo className="brightness-200" />
          </Link>
        </div>

        {/* Desktop links take up the right half of the space and are evenly distributed */}
        <div className="hidden md:flex flex-1 items-center justify-between">
          {links.map((link) => {
            const active = isActive(link.path)
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  relative text-[16px] font-medium transition-all duration-300
                  px-4 py-2 rounded-full
                  ${active
                    ? 'text-white bg-white/15 backdrop-blur-sm'
                    : 'text-white hover:text-white/70'
                  }
                `}
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
            const active = isActive(link.path)
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  text-4xl font-medium tracking-tight transition-colors py-3
                  ${active
                    ? 'text-violet-400'
                    : 'text-white hover:text-violet-400'
                  }
                `}
                onClick={() => setOpen(false)}
              >
                {link.name}
                {active && (
                  <span className="inline-block ml-3 w-2 h-2 rounded-full bg-violet-400 align-middle" />
                )}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
