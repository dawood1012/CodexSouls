export default function FluidBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#020202]">
      {/* 
        Ultra-soft, massive CSS mesh gradient.
        We use extreme blurs (140px-200px) and low opacity 
        to ensure it looks like a premium, continuous fluid glow
        that gracefully spans large desktop screens without pixelation.
      */}
      <div className="absolute inset-0 opacity-[0.35] mix-blend-screen">
        {/* Purple Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] min-w-[600px] min-h-[600px] max-w-[1000px] max-h-[1000px] bg-[#6E5BFF] rounded-full filter blur-[140px] md:blur-[200px] animate-fluid-1" />
        
        {/* Pink Glow */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[65vw] h-[65vw] min-w-[500px] min-h-[500px] max-w-[900px] max-h-[900px] bg-[#FF52B7] rounded-full filter blur-[150px] md:blur-[220px] animate-fluid-2" />
        
        {/* Blue Glow */}
        <div className="absolute top-[30%] left-[20%] w-[80vw] h-[80vw] min-w-[700px] min-h-[700px] max-w-[1200px] max-h-[1200px] bg-[#00A6FF] rounded-full filter blur-[140px] md:blur-[200px] animate-fluid-3" />
      </div>

      {/* Subtle Film Grain Overlay for ultra-premium texture (optional but highly recommended for dark themes) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  )
}
