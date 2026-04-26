import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 group overflow-hidden"
    >
      {/* Sun (visible in dark mode — click to go light) */}
      <Sun
        size={18}
        className={`absolute text-yellow-400 transition-all duration-500 ${
          isDark
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 rotate-90 scale-50'
        }`}
      />
      {/* Moon (visible in light mode — click to go dark) */}
      <Moon
        size={18}
        className={`absolute text-violet-600 transition-all duration-500 ${
          isDark
            ? 'opacity-0 -rotate-90 scale-50'
            : 'opacity-100 rotate-0 scale-100'
        }`}
      />
    </button>
  )
}
