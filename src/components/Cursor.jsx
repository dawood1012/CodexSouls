import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const circleRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const circlePos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
        dotRef.current.style.opacity = '1'
      }
      if (circleRef.current) circleRef.current.style.opacity = '1'

      const target = e.target
      const isHover =
        target.closest('a, button, input, textarea, [data-cursor="hover"], .cursor-pointer') !== null
      setHovering(isHover)
    }

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0'
      if (circleRef.current) circleRef.current.style.opacity = '0'
    }

    const handleMouseDown = () => setClicking(true)
    const handleMouseUp = () => setClicking(false)

    const animate = () => {
      const { x, y } = posRef.current
      const dx = x - circlePos.current.x
      const dy = y - circlePos.current.y
      circlePos.current.x += dx * 0.18
      circlePos.current.y += dy * 0.18

      if (circleRef.current) {
        circleRef.current.style.left = `${circlePos.current.x}px`
        circleRef.current.style.top = `${circlePos.current.y}px`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const circleScale = clicking ? 0.7 : hovering ? 2 : 1
  const dotScale = clicking ? 1.6 : hovering ? 0 : 1

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] opacity-0"
        style={{
          width: '8px',
          height: '8px',
          background: '#f5f5f0',
          borderRadius: '50%',
          transform: `translate(-50%, -50%) scale(${dotScale})`,
          boxShadow: '0 0 12px rgba(245, 245, 240, 0.6)',
          transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s',
        }}
      />

      {/* Circle */}
      <div
        ref={circleRef}
        className="pointer-events-none fixed z-[9998] opacity-0"
        style={{
          width: '44px',
          height: '44px',
          border: `${hovering ? '1px' : '2px'} solid #f5f5f0`,
          borderRadius: '50%',
          transform: `translate(-50%, -50%) scale(${circleScale})`,
          boxShadow: '0 0 20px rgba(245, 245, 240, 0.3)',
          background: hovering ? 'rgba(245, 245, 240, 0.08)' : 'transparent',
          transition:
            'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s, border 0.3s, opacity 0.2s',
        }}
      />
    </>
  )
}
