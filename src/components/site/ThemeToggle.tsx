'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const current = mounted ? theme === 'system' ? resolvedTheme : theme : 'light'
  const isDark = current === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 bg-white/70 text-navy-700 backdrop-blur transition hover:bg-navy-100 dark:border-navy-700 dark:bg-navy-800/60 dark:text-navy-100 dark:hover:bg-navy-700"
    >
      {mounted && isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
