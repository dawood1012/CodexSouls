import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }) {
  const theme = 'dark'

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('dark')
    root.classList.remove('light')
  }, [])

  const toggle = () => {}

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
