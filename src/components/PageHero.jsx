import { useEffect, useState } from 'react'

export default function PageHero({ label, heading, subtitle }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative bg-transparent text-white overflow-hidden">
      <div
        className="max-w-5xl mx-auto px-8 lg:px-12 pt-48 pb-24 flex flex-col items-center text-center"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {label && (
          <p className="text-[#6E5BFF] font-semibold text-base md:text-lg tracking-widest uppercase mb-6">
            {label}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-[1.2] md:whitespace-nowrap">
          {heading}
        </h1>
        {subtitle && (
          <p className="preset-sub-m text-white/50 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
