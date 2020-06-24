import {GistFilesModel, GistLogoDOMModel, GistModel} from '../models'
import {settings} from '../../../settings'
import githubLogo from '../../../assets/images/social/github.svg'

const transformLogos = (logos: GistModel): GistLogoDOMModel[] | any[] => {
  if (!logos?.files) return []

  const files: GistFilesModel[] = Object.values(logos.files)

  return files.map((item: GistFilesModel) => ({
    name: getLogoName(item.filename),
    url: item.raw_url
  }))
}

const getLogoName = (str: string): string | undefined => {
  const result = str.match(settings.gists.regexLogoFilename)

  return result && result[1] ? result[1].replace(settings.gists.regexLogoFilename, '').trim() : undefined
}

const getLogo = (techLogos: GistLogoDOMModel[] | undefined, name: string): GistLogoDOMModel => {
  const logoDefault = {name: 'github', url: githubLogo}

  if (!techLogos || !techLogos.length) return logoDefault

  return techLogos.find((item: GistLogoDOMModel) => item.name === name) || logoDefault
}

export const gistLogosService = {
  transformLogos,
  getLogoName,
  getLogo
}
