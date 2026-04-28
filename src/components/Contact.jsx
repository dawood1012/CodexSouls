import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import Magnetic from './Magnetic'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const inputCls =
    'bg-transparent border-b border-zinc-300 dark:border-white/10 focus:border-violet-500 dark:focus:border-violet-400/60 py-3 text-zinc-900 dark:text-white text-sm placeholder:text-zinc-400 dark:placeholder:text-white/15 outline-none transition-all duration-500 hover:border-zinc-500 dark:hover:border-white/30 focus:translate-x-1'

  return (
    <section id="contact" className="relative bg-transparent dark:bg-black py-32 border-t border-zinc-200/60 dark:border-white/5 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <Reveal direction="right">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-white/30 mb-8">Contact</p>
              <h2 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
                Ready to build<br />something great?
              </h2>
              <p className="mt-8 text-zinc-600 dark:text-white/40 text-base leading-relaxed max-w-xs">
                Tell us about your project. We respond within 24 hours.
              </p>
              <Magnetic strength={0.25}>
                <a
                  href="mailto:hello@codexsouls.dev"
                  className="mt-8 inline-flex items-center gap-2 text-zinc-700 dark:text-white/50 hover:text-zinc-900 dark:hover:text-white text-sm font-medium transition-colors hover:gap-3"
                >
                  hello@codexsouls.dev <ArrowUpRight size={14} />
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal direction="left" delay={120}>
            {sent ? (
              <div className="flex flex-col justify-center py-16">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Message sent.</h3>
                <p className="text-zinc-600 dark:text-white/40">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-white/30">Name</label>
                    <input type="text" name="name" required placeholder="John Doe" value={form.name} onChange={handleChange} className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-white/30">Email</label>
                    <input type="email" name="email" required placeholder="john@company.com" value={form.email} onChange={handleChange} className={inputCls} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-white/30">Project Details</label>
                  <textarea name="message" required rows={5} placeholder="We're building a SaaS tool and need help with..." value={form.message} onChange={handleChange} className={`${inputCls} resize-none`} />
                </div>
                <Magnetic strength={0.4} className="self-start">
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white border border-zinc-300 dark:border-white/20 hover:border-violet-500 dark:hover:border-violet-400/60 px-7 py-3 rounded-full transition-all duration-500 hover:bg-violet-500/10 hover:gap-4 group bg-white dark:bg-transparent"
                  >
                    Send Message
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                  </button>
                </Magnetic>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
