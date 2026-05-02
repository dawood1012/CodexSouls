import { useEffect, useState } from 'react'

/**
 * Decorative geometric shapes — drift around in light mode
 * to give that "designer mood-board" feel. Mostly hidden in dark mode.
 */
export default function GeometricShapes() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      setMouse({ x: (e.clientX - cx) / cx, y: (e.clientY - cy) / cy })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden dark:opacity-20">
      {/* Plus sign — top left */}
      <svg
        className="absolute top-[14%] left-[7%] w-7 h-7 text-violet-500/60"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{
          transform: `translate(${mouse.x * 18}px, ${mouse.y * 12}px) rotate(${mouse.x * 20}deg)`,
          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
          animation: 'drift-a 12s ease-in-out infinite',
        }}
      >
        <rect x="10" y="2" width="4" height="20" rx="1" />
        <rect x="2" y="10" width="20" height="4" rx="1" />
      </svg>

      {/* Outline circle — upper right */}
      <div
        className="absolute top-[18%] right-[9%] w-20 h-20 rounded-full border-[2.5px] border-violet-400/45"
        style={{
          transform: `translate(${mouse.x * -22}px, ${mouse.y * -14}px)`,
          transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
          animation: 'drift-b 14s ease-in-out infinite',
        }}
      />

      {/* Filled square — left middle, rotated */}
      <div
        className="absolute top-[55%] left-[5%] w-10 h-10 rounded-md"
        style={{
          background: 'linear-gradient(135deg, #f9a8d4 0%, #c4b5fd 100%)',
          transform: `rotate(20deg) translate(${mouse.x * 14}px, ${mouse.y * 18}px)`,
          transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
          animation: 'drift-a 11s ease-in-out infinite reverse',
        }}
      />

      {/* X mark — bottom left */}
      <svg
        className="absolute bottom-[18%] left-[12%] w-6 h-6 text-pink-400/70"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          transform: `translate(${mouse.x * 16}px, ${mouse.y * -10}px) rotate(${mouse.y * 15}deg)`,
          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
          animation: 'drift-b 9s ease-in-out infinite',
        }}
      >
        <path d="M5 5 L19 19 M19 5 L5 19" />
      </svg>

      {/* Squiggle — right middle */}
      <svg
        className="absolute top-[48%] right-[6%] w-24 h-10 text-violet-400/55"
        viewBox="0 0 100 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          transform: `translate(${mouse.x * -16}px, ${mouse.y * 12}px)`,
          transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
          animation: 'drift-a 13s ease-in-out infinite',
        }}
      >
        <path d="M5 15 Q 20 5, 35 15 T 65 15 T 95 15" />
      </svg>

      {/* Tiny dot cluster — bottom right */}
      <div
        className="absolute bottom-[22%] right-[14%]"
        style={{
          transform: `translate(${mouse.x * -12}px, ${mouse.y * 10}px)`,
          transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <div className="grid grid-cols-3 gap-1.5">
          {[...Array(9)].map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-violet-500/55" />
          ))}
        </div>
      </div>

      {/* Triangle outline — top middle */}
      <svg
        className="absolute top-[10%] left-[45%] w-12 h-12 text-pink-400/50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        style={{
          transform: `translate(${mouse.x * 10}px, ${mouse.y * 14}px) rotate(${mouse.x * -12}deg)`,
          transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
          animation: 'drift-b 10s ease-in-out infinite',
        }}
      >
        <path d="M12 3 L22 21 L2 21 Z" />
      </svg>

      <style>{`
        @keyframes drift-a {
          0%,100% { translate: 0 0; }
          50% { translate: 8px -12px; }
        }
        @keyframes drift-b {
          0%,100% { translate: 0 0; }
          50% { translate: -10px 14px; }
        }
      `}</style>
    </div>
  )
}
