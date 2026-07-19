/**
 * the MADRIX logo — pure CSS text, no images.
 * Renders crisp at any size with no loading or scaling issues.
 */
export default function Logo({ className = '' }) {
  return (
    <span
      className={`select-none whitespace-nowrap ${className}`}
      style={{
        fontFamily: "'Aeonik', sans-serif",
        fontWeight: 400,
        fontSize: 'clamp(28px, 2.4vw, 38px)',
        letterSpacing: '0.02em',
        lineHeight: 1,
        color: 'white',
      }}
    >
      <span style={{ fontWeight: 400 }}>the </span>
      <span style={{ fontWeight: 700, letterSpacing: '0.06em' }}>MADRIX</span>
    </span>
  )
}
