import {GistFilesModel, GistDOMModel, GistModel, GistsResponseModel} from './GistsModel';
import {settings} from '../../settings';

export const GistsService = {
  getUrl: (params = settings.github.urlParams): string => `${params.url}/${params.user}/gists?page=1&per_page=${params.limit}`,

  getGists: async function(): Promise<GistsResponseModel> {
    const url = this.getUrl();

    try {
      const response = await fetch(url)
      return await response.json()
    } catch (error) {
      return error
    }
  },

  mapGists: async function(): Promise<GistDOMModel[]> {
    const gists: GistsResponseModel = await this.getGists();
    
    return Object.values(gists).map((gist: GistModel) => {
      const files: GistFilesModel[] = Object.values(gist.files);

      return {
        id: gist.id,
        url: gist.html_url,
        files: files,
        title: gist.description || settings.gist.title,
        language: files[0].language || settings.gist.logo
      };
    });
  }
};
