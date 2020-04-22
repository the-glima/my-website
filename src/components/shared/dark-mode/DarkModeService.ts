import {settings} from '../../settings'
import {DarkModeEnum} from './DarkModeEnum'

export const DarkModeService = {
  setDarkMode: (darkMode: boolean) => {
    window.localStorage.setItem(
      `${settings.localStorage.prefix}${DarkModeEnum.key}`,
      darkMode ? DarkModeEnum.dark : DarkModeEnum.default
    )
  },

  getDarkMode: function (): any {
    return window.localStorage.getItem(`${settings.localStorage.prefix}${DarkModeEnum.key}`)
  },

  isDarkMode: function (): boolean {
    return this.getDarkMode() === DarkModeEnum.dark
  }
}
