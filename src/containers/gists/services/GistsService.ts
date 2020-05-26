import {GistFilesModel, GistDOMModel, GistModel, GistsResponseModel, GistsData} from '../models'
import {settings} from '../../../settings'
import {isDevelopment} from '../../../helpers'
import StorageService from '../../../shared/services/StorageService'

const storageService = StorageService()

export const GistsService = {
  headers: {
    Authorization: `token ${process.env.REACT_APP_GH_TOKEN}`
  },

  getUrl: (params = settings.github.urlParams): string => {
    const url = `${params.url}/${params.user}/gists?per_page`

    return isDevelopment() ? `${url}=100` : `${url}=${settings.gists.limit}`
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
      gistsCollection = gistsCollection.filter((gist) => gist.public).slice(0, settings.gists.limit)
    }

    return gistsCollection.map((gist: GistModel) => {
      const files: GistFilesModel[] = Object.values(gist.files)

      return {
        id: gist.id,
        url: gist.html_url,
        files: files,
        title: gist.description || settings.gists.title,
        language: files[0].language || settings.gists.logo
      }
    })
  },

  setGistsLocalStorage: async (data: GistsData): Promise<void> => {
    if (data) {
      storageService.setItem('gists', JSON.stringify(data))
    }
  },

  getGistsLocalStorage: (): GistsData => {
    const gists = storageService.getItem('gists')

    return gists ? JSON.parse(gists) : null
  },

  shouldSetGistsLocalStorage: (savedGists: GistsData): boolean => {
    if (!savedGists || !savedGists.date) return false

    const hour = 1000 * 60 * 60
    const diff = (Date.now() - savedGists.date) / hour

    return Math.abs(Math.round(diff)) > 1
  }
}
