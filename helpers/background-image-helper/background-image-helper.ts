export type BackgroundImageType = 'enabled' | 'disabled'

export const backgroundImageIsActive = (): BackgroundImageType => {
  if (typeof localStorage !== 'undefined') {
    const value = localStorage.getItem('backgroundImage') as BackgroundImageType | undefined | null
    if (value === undefined || value === null) {
      return 'enabled'
    }

    return value
  }

  return 'enabled'
}