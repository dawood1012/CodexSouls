/**
 * CodexSouls logo — official Codex.png (cube + wordmark baked in).
 * Uses object-contain to show the entire logo without cropping.
 * dark:invert flips white background → black in dark mode.
 */
export default function Logo({ height = 36, className = '' }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo%20codex.png`}
      alt="the MADRIX"
      className={`object-contain dark:invert transition-all duration-300 ${className}`}
      style={{ height, width: 'auto' }}
    />
  )
}
