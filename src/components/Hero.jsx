import { useEffect, useState, useRef } from 'react'

const tags = ['AI', 'Web', 'Mobile', 'Design']

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const winHeight = window.innerHeight
      const progress = Math.min(scrollTop / (winHeight * 0.8), 1)
      setScrollProgress(progress)
    }

    const handleMouseMove = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      setMouse({
        x: (e.clientX - cx) / cx,
        y: (e.clientY - cy) / cy,
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent dark:bg-black transition-colors duration-500 ambient-orbs"
      style={{
        opacity: 1 - scrollProgress * 1.2,
        transform: `translateY(${scrollProgress * 100}px)`,
      }}
    >
      {/* Mouse-tracking glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 w-[1000px] h-[420px] transition-transform duration-500 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mouse.x * 60}px), ${mouse.y * 30}px)`,
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(110,91,255,0.22) 0%, rgba(110,91,255,0.08) 45%, transparent 70%)',
        }}
      />

      {/* Floating dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-violet-500/25 dark:bg-violet-400/30"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-${i % 3} ${8 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-16"
        style={{
          transform: `translate(${mouse.x * -10}px, ${mouse.y * -8}px)`,
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div
          className="flex items-center gap-6 mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s',
          }}
        >
          {tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-6">
              <span
                className="text-base font-bold tracking-widest uppercase hover:scale-110 transition-transform inline-block cursor-pointer"
                style={{
                  color: '#6e5bff',
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease ${0.2 + i * 0.1}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.1}s`,
                }}
              >
                {tag}
              </span>
              {i < tags.length - 1 && (
                <span className="w-[3px] h-[3px] rounded-full bg-zinc-400 dark:bg-white/80 inline-block" />
              )}
            </span>
          ))}
        </div>

        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-bold text-zinc-900 dark:text-white leading-[1.04] tracking-tight"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 1s ease 0.5s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.5s',
          }}
        >
          Code That Carries
          <br />a Soul
        </h1>

        <p
          className="mt-7 text-lg text-zinc-600 dark:text-white/45 max-w-lg leading-relaxed"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease 0.85s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.85s',
          }}
        >
          Sharp strategy. Precision execution. Experiences that drive impact.
        </p>
      </div>

      <style>{`
        @keyframes float-0 { 0%,100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-30px) translateX(15px); } }
        @keyframes float-1 { 0%,100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(20px) translateX(-15px); } }
        @keyframes float-2 { 0%,100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-15px) translateX(-20px); } }
      `}</style>
    </section>
  )
}
