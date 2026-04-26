import { Twitter, Github, Linkedin, Mail } from 'lucide-react'

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
  { icon: Mail, href: 'mailto:hello@codexsouls.dev', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-5 h-5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M8 17L4 13L8 9" className="stroke-black dark:stroke-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 7L20 11L16 15" className="stroke-black dark:stroke-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 7L11 17" className="stroke-black dark:stroke-white" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="font-semibold text-black dark:text-white text-[15px] tracking-tight">CodexSouls</span>
          </a>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-sm text-black/45 dark:text-white/30 hover:text-black/80 dark:hover:text-white/70 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="text-black/40 dark:text-white/25 hover:text-black/80 dark:hover:text-white/70 transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-black/35 dark:text-white/20 text-xs">© {new Date().getFullYear()} CodexSouls. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-black/35 dark:text-white/20 hover:text-black/55 dark:hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-black/35 dark:text-white/20 hover:text-black/55 dark:hover:text-white/40 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
