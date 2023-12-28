export const toRandomOptions = (options: string[]) => {
  return options.sort(() => Math.random() - 0.5)
}