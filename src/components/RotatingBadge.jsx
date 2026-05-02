import { useEffect, useState } from 'react'

/**
 * Circular rotating badge — text wraps around a circle and spins.
 * Rotation accelerates with scroll for a tactile, kinetic feel.
 */
export default function RotatingBadge({
  text = 'AVAILABLE FOR PROJECTS · 2026 · ',
  className = '',
}) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Repeat the text twice so it always fills the circle nicely
  const fullText = (text + text).trim()
  // Base auto-rotate speed + scroll-driven acceleration
  const rotation = scrollY * 0.5

  return (
    <div className={`relative w-[150px] h-[150px] ${className}`}>
      {/* Spinning ring with text */}
      <div
        className="absolute inset-0"
        style={{
          transform: `rotate(${rotation}deg)`,
          animation: 'badge-spin 18s linear infinite',
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="badge-circle"
              d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text
            fontSize="14"
            fontWeight="700"
            letterSpacing="3"
            className="fill-zinc-900 dark:fill-white"
          >
            <textPath href="#badge-circle">{fullText}</textPath>
          </text>
        </svg>
      </div>

      {/* Center violet dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold"
            style={{ background: 'linear-gradient(135deg, #6e5bff 0%, #a78bfa 100%)' }}
          >
            ✦
          </div>
          {/* Pulsing ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-violet-500/50"
            style={{ animation: 'badge-pulse 2s ease-in-out infinite' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes badge-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes badge-pulse {
          0%,100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
