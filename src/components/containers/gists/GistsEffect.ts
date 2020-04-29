import {GistFilesModel, GistDOMModel, GistModel, GistsResponseModel} from './GistsModel'
import {settings} from '../../settings'
import {isDevelopment} from '../../helpers'

export const GistsEffect = {
  headers: {
    Authorization: `token ${process.env.REACT_APP_GH_TOKEN}`
  },

  getUrl: (params = settings.github.urlParams): string => {
    const url = `${params.url}/${params.user}/gissts?per_page`

    return isDevelopment() ? `${url}=100` : `${url}=${settings.gist.limit}`
  },

  getGists: async function (): Promise<GistsResponseModel> {
    const url = this.getUrl()
    const headers = {
      ...(isDevelopment() && {headers: {...this.headers}})
    }

    try {
      const response = await fetch(url, headers)
      return await response.json()
    } catch (error) {
      return error
    }
  },

  mapGists: async function (): Promise<GistDOMModel[]> {
    const gists: GistsResponseModel = await this.getGists()
    let gistsCollection = Object.values(gists)

    if (isDevelopment()) {
      gistsCollection = gistsCollection.filter((gist) => gist.public).slice(0, settings.gist.limit)
    }

    return gistsCollection.map((gist: GistModel) => {
      const files: GistFilesModel[] = Object.values(gist.files)

      return {
        id: gist.id,
        url: gist.html_url,
        files: files,
        title: gist.description || settings.gist.title,
        language: files[0].language || settings.gist.logo
      }
    })
  },

  setGistsLocalStorage: async function (gists: GistDOMModel[]): Promise<void> {
    if (gists) {
      const object = {
        date: Date.now(),
        data: gists
      }

      window.localStorage.setItem(`${settings.localStorage.gistsKey}`, JSON.stringify(object))
    }
  },

  getGistsLocalStorage: function (): any {
    const gists = window.localStorage.getItem(`${settings.localStorage.gistsKey}`)

    return gists ? JSON.parse(gists) : null
  },

  shouldSetGistsLocalStorage: function (savedGists: any): boolean {
    if (!savedGists || !savedGists.date) return false

    const hour = 1000 * 60 * 60
    const diff = (Date.now() - savedGists.date) / hour

    return Math.abs(Math.round(diff)) > 1
  }
}
