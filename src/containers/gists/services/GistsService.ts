import {GistFilesModel, GistDOMModel, GistModel, GistsData, ErrorResponse} from '../models'
import {settings} from '../../../settings'
import {isDevelopment} from '../../../helpers'
import {storageService} from '../../../shared/services/StorageService'
import {GistTechLogosService} from './GistTechLogosService'

const headers = {
  Authorization: `token ${process.env.REACT_APP_GH_TOKEN}`
}

const getUrl = (params = settings.github.urlParams): string =>
  `${params.url}/users/${params.user}/gists?per_page=${params.perPage}`

const fetchGists = async (): Promise<GistModel[] | ErrorResponse> => {
  const url = getUrl()
  const customHeaders = {
    ...(isDevelopment() && {headers: {...headers}})
  }

  return await fetch(url, customHeaders)
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
}

const mapGists = (gists: GistModel[]): GistDOMModel[] => {
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
}

const filterGists = (gists: GistModel[]): GistModel[] => {
  const regex = new RegExp(settings.gists.regexWebsite, 'gmi')

  return gists
    .filter((gist) => gist.public)
    .filter((gist: GistModel) => gist.description.match(regex))
    .slice(0, settings.gists.limit)
    .map((gist: GistModel) => ({
      ...gist,
      description: gist.description.replace(regex, '').trim()
    }))
}

const getGists = (gistCollection: GistModel[]): GistDOMModel[] => {
  gistCollection = (gistCollection?.length && gistCollection) || []

  const filteredGists = filterGists(gistCollection)

  return mapGists(filteredGists)
}

const shouldSave = (gists: GistsData): boolean => {
  if (!gists || !gists.date) return false

  const hour = 1000 * 60 * 60
  const diff = (Date.now() - gists.date) / hour

  return Math.abs(Math.round(diff)) > 1
}

const save = async (data: any): Promise<GistsData> => {
  const savedGists = storageService.getParsedItem('gists')

  if (savedGists && !shouldSave(savedGists)) return savedGists

  const gistsCollection = getGists(data)
  const gistTechLogos = gistsCollection.length ? await GistTechLogosService.getTechLogos() : []
  const gistsData: GistsData = {
    date: Date.now(),
    collection: gistsCollection,
    logos: gistTechLogos
  }

  storageService.setItem('gists', JSON.stringify(gistsData))

  return gistsData
}

export const gistsService = {
  fetchGists,
  getGists,
  save
}
