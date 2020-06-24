import {SetThemeEnum, SetThemeType} from '../models/SetThemeEnum'

export const SetThemeEffect = {
  getPreferColorScheme: (): SetThemeType | undefined => {
    if (!window.matchMedia) return undefined

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? SetThemeEnum.dark
      : window.matchMedia('(prefers-color-scheme: light)').matches
      ? SetThemeEnum.light
      : undefined
  },

  isDarkTheme: (theme: string): Boolean => theme === SetThemeEnum.dark
}
