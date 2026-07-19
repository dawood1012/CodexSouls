import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: 50, suffix: '+', label: 'Products Engineered' },
  { value: 30, suffix: '+', label: 'Strategic Partners' },
  { value: 5, suffix: '★', label: 'Execution Rating' },
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
      <span className="preset-h2 font-bold text-zinc-900 dark:text-white">
        {count}{suffix}
      </span>
      <span className="mt-3 text-zinc-600 dark:text-white/35 preset-body-s font-medium group-hover:text-zinc-800 dark:group-hover:text-white/60 transition-colors duration-500">
        {label}
      </span>
    </div>
  )
}

export default function About({ teaser = false }) {
  return (
    <section id="company" className="relative bg-transparent dark:bg-transparent py-24 border-t border-zinc-200/60 dark:border-white/5 transition-colors duration-500 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <Reveal direction="right">
            <div>
              <p className="text-violet-500 font-bold uppercase tracking-widest text-xs mb-3">About</p>
              <h2 className="preset-h2 font-bold text-zinc-900 dark:text-white tracking-tight">
                The Systematic Matrix.
              </h2>
              <p className="mt-8 preset-body-m text-zinc-600 dark:text-white/55 leading-relaxed">
                At MADRIX, we are disruptive minds operating inside a systematic matrix. We build AI-native systems and full-stack products that drive immediate and scalable business impact.
              </p>
              <p className="mt-4 preset-body-m text-zinc-500 dark:text-white/40 leading-relaxed">
                We operate with absolute precision—no bloated layers, no account managers playing telephone. You partner directly with the technical architects and engineers executing your vision, ensuring flawless delivery from strategy to deployment.
              </p>

              {/* Explore Company button when teaser is active */}
              {teaser && (
                <div className="mt-12">
                  <Link 
                    to="/about"
                    className="inline-flex items-center gap-2 text-violet-500 font-bold hover:gap-4 transition-all duration-300"
                  >
                    <span>More About Company</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              )}
            </div>
          </Reveal>

          {/* Render Stats grid only in full-page mode, or keep it inside teaser, let's keep stats on the dedicated about page or home? Dedicated about page is better! */}
          {!teaser ? (
            <Reveal direction="left" delay={150}>
              <div className="grid grid-cols-2 gap-px bg-zinc-200 dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-[32px] overflow-hidden shadow-[0_2px_12px_rgba(24,24,27,0.04)] dark:shadow-none">
                {stats.map((s) => (
                  <StatCounter key={s.label} {...s} />
                ))}
              </div>
            </Reveal>
          ) : (
            <Reveal direction="left" delay={150}>
              <div className="relative min-h-[300px] rounded-[32px] overflow-hidden bg-zinc-950 p-12 flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 to-transparent pointer-events-none" />
                <h3 className="preset-h3 text-white font-bold mb-3 relative z-10">We believe in absolute transparency.</h3>
                <p className="preset-body-m text-white/50 relative z-10 max-w-sm">No bloated consulting pitch. We write clean code, deploy fast, and build partnerships that endure.</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
