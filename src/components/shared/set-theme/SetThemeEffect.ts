import {settings} from '../../settings'
import {SetThemeEnum, SetThemeType} from './SetThemeEnum'

export const SetThemeEffect = {
  setTheme: (darkMode: string) => {
    window.localStorage.setItem(
      `${settings.localStorage.themeKey}`,
      darkMode === SetThemeEnum.dark ? SetThemeEnum.dark : SetThemeEnum.light
    )
  },

  getTheme: function (): any {
    return window.localStorage.getItem(`${settings.localStorage.themeKey}`)
  },

  getPreferColorScheme: function (): SetThemeType | null {
    if (!window.matchMedia) return null

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? SetThemeEnum.dark
      : window.matchMedia('(prefers-color-scheme: light)').matches
      ? SetThemeEnum.light
      : null
  },

  isDarkTheme: function (theme: string): Boolean {
    return theme === SetThemeEnum.dark
  }
}
