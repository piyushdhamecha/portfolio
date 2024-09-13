'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type ThemeContextType = {
  theme: Theme
  handleToggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({
  children
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')

  const handleToggleTheme = () => {
    const newValue = theme == 'light' ? 'dark' : 'light'

    setTheme(newValue)
    window.localStorage.setItem('theme', newValue)

    if (newValue === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null

    console.log({ localTheme })
    if (localTheme) {
      setTheme(localTheme)
      document.documentElement.classList.add(localTheme)
    } else if (window.matchMedia("(prefer-color-scheme: dark)").matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <ThemeContext.Provider value={{
      theme,
      handleToggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}


export function useThemeContext() {
  const context = useContext(ThemeContext)

  if (context === null) {
    throw new Error(
      "useThemeContext must be used within an ThemeContextProvider"
    )
  }

  return context
}