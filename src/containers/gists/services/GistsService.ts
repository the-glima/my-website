import {GistFilesModel, GistDOMModel, GistModel, GistsData, ErrorResponse} from '../models'
import {settings} from '../../../settings'
import {isDevelopment} from '../../../helpers'
import StorageService from '../../../shared/services/StorageService'

const storageService = StorageService()

export const GistsService = {
  headers: {
    Authorization: `token ${process.env.REACT_APP_GH_TOKEN}`
  },

  getUrl: (params = settings.github.urlParams): string =>
    `${params.url}/users/${params.user}/gists?per_page=${params.perPage}`,

  fetchGists: async function (): Promise<GistModel[] | ErrorResponse> {
    const url = this.getUrl()
    const headers = {
      ...(isDevelopment() && {headers: {...this.headers}})
    }

    return await fetch(url, headers)
      .then(async (res) => {
        if (!res.ok) {
          const error: ErrorResponse = {
            name: res.ok,
            status: res.status,
            message: res.statusText
          }

          return Promise.reject(error)
        }

        return await res.json()
      })
      .catch((error) => {
        throw error
      })
  },

  mapGists: function (gists: GistModel[]): GistDOMModel[] {
    return gists.map((gist: GistModel) => {
      const files: GistFilesModel[] = Object.values(gist.files)
      const title = gist.description.replace(settings.gists.regexLogoDescription, '').trim()
      const languageMatch = gist.description.match(settings.gists.regexLogoDescription)
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

  getGists: function (gistCollection: []): GistDOMModel[] {
    gistCollection = (gistCollection?.length && gistCollection) || []

    const filteredGists = this.filterGists(gistCollection)

    return this.mapGists(filteredGists)
  },

  setGistsLocalStorage: (data: GistsData) => {
    if (data) {
      // storageService.setItem('gists', JSON.stringify(data))
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
