import {settings} from '../../settings'
import {DarkModeEnum} from './DarkModeEnum'

export const DarkModeService = {
  setTheme: (darkMode: string) => {
    window.localStorage.setItem(
      `${settings.localStorage.themeKey}`,
      darkMode === DarkModeEnum.dark ? DarkModeEnum.dark : DarkModeEnum.light
    )
  },

  getTheme: function (): any {
    return window.localStorage.getItem(`${settings.localStorage.themeKey}`)
  },

  hasDarkPreferColorScheme: function (): Boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  },

  isDarkMode: function (theme: string): Boolean {
    return theme === DarkModeEnum.dark
  }
}
