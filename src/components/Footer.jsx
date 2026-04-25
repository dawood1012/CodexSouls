import { Twitter, Github, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Company', href: '#company' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@codexsouls.dev', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-5 h-5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M8 17L4 13L8 9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 7L20 11L16 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 7L11 17" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="font-semibold text-white text-[15px] tracking-tight">CodexSouls</span>
          </a>

          {/* Nav */}
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-sm text-white/30 hover:text-white/70 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-white/25 hover:text-white/70 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} CodexSouls. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
