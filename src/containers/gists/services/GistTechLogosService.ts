import {GistFilesModel, GistModel, GistTechLogoDOMModel} from '../models'
import {settings} from '../../../settings'
import {isDevelopment} from '../../../helpers'
import githubLogo from '../../../assets/images/social/github.svg'

export const GistTechLogosService = {
  headers: {
    Authorization: `token ${process.env.REACT_APP_GH_TOKEN}`
  },

  getUrl: (params = settings.github.urlParams): string => `${params.url}/gists/${params.gistTechLogosId}`,

  fetchTechLogos: async function (): Promise<any> {
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

  getTechLogos: async function (): Promise<GistTechLogoDOMModel[]> {
    const techLogos: GistModel = await this.fetchTechLogos()
    let result: any[] = []

    if (techLogos && techLogos.files) {
      const files: GistFilesModel[] = Object.values(techLogos.files)

      result = files.map((item: GistFilesModel) => ({
        name: this.getTechName(item.filename),
        url: item.raw_url
      }))
    }

    return result
  },

  getTechName: function (str: string): string | null {
    const result = str.match(settings.gists.regexLogoFilename)

    return result && result[1] ? result[1].replace(settings.gists.regexLogoFilename, '').trim() : null
  },

  getTechLogo: (techLogos: GistTechLogoDOMModel[] | undefined, name: string): GistTechLogoDOMModel => {
    const logoDefault = {name: 'github', url: githubLogo}

    if (!techLogos || !techLogos.length) return logoDefault

    return techLogos.find((item: GistTechLogoDOMModel) => item.name === name) || logoDefault
  }
}
