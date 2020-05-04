import {settings} from '../../settings'

export const IntroEffect = {
  setAccent: (accent: string) => {
    window.localStorage.setItem(`${settings.localStorage.accentKey}`, accent)
  },

  getAccent: function (): any {
    return window.localStorage.getItem(`${settings.localStorage.accentKey}`)
  }
}
