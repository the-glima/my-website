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

  fetchGists: async function (): Promise<GistModel[]> {
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

  mapGists: function (gists: GistModel[]): GistDOMModel[] {
    return gists.map((gist: GistModel) => {
      const files: GistFilesModel[] = Object.values(gist.files)
      const title = gist.description.replace(settings.gists.regexLogo, '').trim()
      const languageMatch = gist.description.match(settings.gists.regexLogo)
      const language =
        languageMatch && languageMatch[1] && languageMatch[1].replace(settings.gists.regexWebsite, '').trim()

      return {
        id: gist.id,
        url: gist.html_url,
        files: files,
        title: title || settings.gists.title,
        language: language || files[0].language || settings.gists.logo
      }
    })
  },

  filterGists: function (gists: GistModel[]): GistModel[] {
    const regex = new RegExp(settings.gists.regexWebsite, 'gmi')

    return gists
      .filter((gist) => gist.public)
      .filter((gist: GistModel) => gist.description.match(regex))
      .slice(0, settings.gists.limit)
      .map((gist: GistModel) => ({
        ...gist,
        description: gist.description.replace(regex, '').trim()
      }))
  },

  getGists: async function (): Promise<GistDOMModel[]> {
    const gists = await this.fetchGists()
    const filteredGists = this.filterGists(gists)
    console.log(filteredGists)
    const mappedGists = this.mapGists(filteredGists)

    return mappedGists
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
