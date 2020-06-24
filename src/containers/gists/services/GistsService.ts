import {settings} from '../../../settings'
import {GistFilesModel, GistDOMModel, GistModel, GistsData} from '../models'
import {GistsApi} from './GistsApi'
import {gistLogosService} from './GistLogosService'
import {storageService} from '../../../shared/services/StorageService'

const transformData = (gists: GistModel[]): GistDOMModel[] => {
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

const filterData = (gists: GistModel[]): GistModel[] => {
  const regex = new RegExp(settings.gists.regexWebsite, 'gmi')

  return gists
    .filter((gist) => gist.public && gist.description.match(regex))
    .slice(0, settings.gists.limit)
    .map((gist: GistModel) => ({
      ...gist,
      description: gist.description.replace(regex, '').trim()
    }))
}

const getSavedGists = (): GistsData | undefined => {
  const [savedGists, error] = storageService.getItem('gists') as GistsData[]

  if (error) return error
  if (!savedGists) return undefined

  return {
    date: Date.now(),
    collection: savedGists.collection,
    logos: savedGists.logos
  }
}

const shouldSaveGists = (gists: GistsData): boolean => {
  if (!gists || !gists.date) return false

  const hour = 1000 * 60 * 60
  const diff = (Date.now() - gists.date) / hour

  return Math.abs(Math.round(diff)) > 1
}

const saveGists = (gists: GistsData): GistsData | void => {
  const savedGists = getSavedGists()

  if (savedGists && !shouldSaveGists(savedGists)) return gists

  storageService.setItem('gists', JSON.stringify(gists))
}

const getGists = async (): Promise<GistsData> => {
  const savedGists = getSavedGists()

  if (savedGists) return savedGists

  const gists = await GistsApi.fetchGists()
  const filteredGists = filterData(gists.collection)

  return {
    date: Date.now(),
    collection: transformData(filteredGists),
    logos: gistLogosService.transformLogos(gists.logos)
  }
}

export const gistsService = {
  getGists,
  saveGists
}
