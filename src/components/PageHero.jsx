import { useEffect, useState } from 'react'

export default function PageHero({ label, heading, subtitle }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex flex-col items-center w-full bg-transparent text-white overflow-hidden pt-[25vh] md:pt-[30vh]">
      <div
        className="relative z-20 flex flex-col items-center text-center px-8 lg:px-12 max-w-5xl mx-auto mb-2"
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

      {/* 
        THE ACTUAL PLANET VIDEO (FIXED BACKGROUND)
        Matches the exact layout of the main Hero section but stays fixed during scroll. 
      */}
      <div className="fixed top-[80vh] md:top-[85vh] left-0 w-full flex flex-col items-center justify-start z-[-1] pointer-events-none">
        <div 
          className="relative w-full h-[80vh] min-h-[600px] flex justify-center items-center overflow-hidden mt-[-100px] md:mt-[-150px]"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)'
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full min-w-[1200px] object-cover mix-blend-screen"
            style={{ objectPosition: 'center 30%' }}
          >
            {/* Primary local file */}
            <source src={`${import.meta.env.BASE_URL}planet.mp4`} type="video/mp4" />
            {/* Failsafe fallback */}
            <source src="https://fueled.com/wp-content/uploads/2025/05/Planet-BG-Large_1080.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
