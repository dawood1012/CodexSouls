import { useRef } from 'react'

export default function TiltCard({ children, className = '', maxTilt = 8, glow = true }) {
  const ref = useRef(null)
  const glowRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2

    const rotateY = ((x - cx) / cx) * maxTilt
    const rotateX = -((y - cy) / cy) * maxTilt

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`

    if (glow && glowRef.current) {
      glowRef.current.style.opacity = '1'
      glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(110,91,255,0.18), transparent 50%)`
    }
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
    if (glow && glowRef.current) glowRef.current.style.opacity = '0'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform',
      }}
    >
      {children}
      {glow && (
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
          style={{ mixBlendMode: 'screen' }}
        />
      )}
    </div>
  )
}
