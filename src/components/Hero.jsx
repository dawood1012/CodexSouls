import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center w-full bg-transparent text-white overflow-hidden pt-[45vh] md:pt-[55vh]"
    >
      {/* 
        1. TOP TEXT BLOCK (Categories + MADRIX)
      */}
      <div
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto mb-2"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="flex flex-wrap justify-center items-center mb-6">
          {['AI', 'WEB', 'MOBILE', 'DESIGN'].map((tag, i) => (
            <span key={tag} className="flex items-center group cursor-default">
              <span className="preset-sub-m font-normal text-[#6E5BFF] tracking-wide transition-all duration-500 hover:text-white">
                {tag}
              </span>
              {i < 3 && <span className="text-white/20 mx-2 text-2xl">·</span>}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-2 cursor-default transition-all duration-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FF52B7] hover:to-[#6E5BFF] hover:scale-[1.02] md:whitespace-nowrap">
          Disruptive Minds inside a Systematic Matrix
        </h1>
      </div>

      {/* 
        2. SUBTEXT & VIDEO BLOCK 
      */}
      <div className="relative w-full flex flex-col items-center justify-start z-10">
        
        {/* 
          "Disruptive Minds..." text 
          Positioned here so it overlaps the top chunk of the video! 
        */}
        <p className="relative z-30 preset-sub-m font-medium text-white/70 max-w-3xl text-center leading-relaxed drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] pb-8">
          We build AI-native systems and full-stack products that drive business impact.
        </p>

        {/* 
          THE ACTUAL PLANET VIDEO
          Pulled aggressively upward. A CSS mask is applied to the top edge 
          to ensure it fades seamlessly into the pitch-black void above, 
          completely removing any harsh horizontal straight lines!
        */}
        <div 
          className="relative w-full h-[80vh] min-h-[600px] flex justify-center items-center overflow-hidden mt-[-200px] z-10"
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
            {/* Failsafe fallback to guarantee the video plays if local routing breaks */}
            <source src="https://fueled.com/wp-content/uploads/2025/05/Planet-BG-Large_1080.mp4" type="video/mp4" />
          </video>
        </div>

      </div>

    </section>
  )
}
