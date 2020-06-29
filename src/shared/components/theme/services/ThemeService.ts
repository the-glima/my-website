import {ThemeEnum, ThemeType} from '../models/ThemeEnum'

const getPreferColorScheme = (): ThemeType | undefined => {
  if (!window.matchMedia) return undefined

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ThemeEnum.dark
    : window.matchMedia('(prefers-color-scheme: light)').matches
    ? ThemeEnum.light
    : undefined
}

const isDarkTheme = (theme: string): Boolean => theme === ThemeEnum.dark

export const ThemeService = {
  getPreferColorScheme,
  isDarkTheme
}
