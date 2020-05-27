import {SetThemeEnum, SetThemeType} from '../models/SetThemeEnum'

export const SetThemeEffect = {
  getPreferColorScheme: (): SetThemeType | null => {
    if (!window.matchMedia) return null

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? SetThemeEnum.dark
      : window.matchMedia('(prefers-color-scheme: light)').matches
      ? SetThemeEnum.light
      : null
  },

  isDarkTheme: (theme: string): Boolean => theme === SetThemeEnum.dark
}
