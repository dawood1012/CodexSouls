import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: 50, suffix: '+', label: 'Products Shipped' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '★', label: 'Average Rating' },
  { value: 3, suffix: 'yrs', label: 'In Business' },
]

function StatCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView(0.3)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true
    const duration = 1400
    const start = performance.now()

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.round(eased * value))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <div
      ref={ref}
      className="group bg-white/90 backdrop-blur-sm dark:bg-black p-10 flex flex-col cursor-pointer hover:bg-white dark:hover:bg-white/5 transition-all duration-500 hover:scale-105"
    >
      <span className="text-5xl font-bold text-zinc-900 dark:text-white">
        {count}{suffix}
      </span>
      <span className="mt-3 text-zinc-600 dark:text-white/35 text-sm font-medium group-hover:text-zinc-800 dark:group-hover:text-white/60 transition-colors duration-500">
        {label}
      </span>
    </div>
  )
}

export default function About() {
  return (
    <section id="company" className="relative bg-transparent dark:bg-black py-32 border-t border-zinc-200/60 dark:border-white/5 transition-colors duration-500 ambient-orbs overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <Reveal direction="right">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-white/30 mb-8">About</p>
              <h2 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
                We build like<br />it matters.
              </h2>
              <p className="mt-8 text-zinc-600 dark:text-white/40 text-base leading-relaxed">
                We're a boutique digital studio. We partner with startups and
                growth-stage companies to turn ambitious ideas into products people
                actually love to use.
              </p>
              <p className="mt-4 text-zinc-500 dark:text-white/30 text-base leading-relaxed">
                Small by choice — no bloated teams, no account managers playing telephone.
                You work directly with the people building your product.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={150}>
            <div className="grid grid-cols-2 gap-px bg-zinc-200 dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(24,24,27,0.04)] dark:shadow-none">
              {stats.map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
