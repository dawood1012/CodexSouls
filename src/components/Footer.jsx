import { Twitter, Github, Linkedin, Mail } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Company', href: '#company' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@themadrix.dev', label: 'Email' },
]

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-white/60 backdrop-blur-md dark:bg-black dark:backdrop-blur-none border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <a href="#" className="flex items-center">
            <Logo height={48} />
          </a>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href.substring(1))}
                  className="text-sm text-zinc-600 dark:text-white/30 hover:text-zinc-900 dark:hover:text-white/70 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="text-zinc-500 dark:text-white/25 hover:text-zinc-900 dark:hover:text-white/70 transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-500 dark:text-white/20 text-xs">© {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-zinc-500 dark:text-white/20 hover:text-zinc-700 dark:hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-zinc-500 dark:text-white/20 hover:text-zinc-700 dark:hover:text-white/40 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
