export type Theme = 'light' | 'dark' | 'system'

const systemApply = (e: MediaQueryListEvent) => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(e.matches ? 'dark' : 'light')
  }
}

export const applyTheme = (theme: Theme) => {
  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', systemApply)
  }
  if (theme === 'system' && typeof window !== 'undefined') {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', systemApply)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('dark', 'light')
      document.documentElement.classList.add(media.matches ? 'dark' : 'light')
    }
  } else {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('dark', 'light')
      document.documentElement.classList.add(theme)
    }
  }
}

export const getInitialTheme = (): Theme => {
  if (typeof localStorage !== 'undefined') {
    const themeStorage = localStorage.getItem('theme') as Theme
    if (themeStorage) {
      return themeStorage
    }
  }

  return 'system'
}