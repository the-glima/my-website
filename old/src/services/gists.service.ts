import axios from 'axios';
import {GistLanguages} from '../enums/gist-languages.enum';
import {GistFilesModel, GistModel, GistResponseModel} from '../models/gists.model';
import {settings} from '../settings';

export const GistsService = {
  getUrl: (params = settings.urlParams): string => `${params.url}/${params.user}/gists?page=1&per_page=${params.limit}`,

  getGists: async function(): Promise<GistResponseModel> {
    const url = this.getUrl();
    let response = null;

    try {
      response = await axios.get(url);
      return response;
    } catch (error) {
      response = error;
    }

    return response;
  },

  mapGists: async function() {
    const gists: GistResponseModel = await this.getGists();
    return Object.values(gists.data).map((gist: GistModel) => {
      const files: GistFilesModel[] = Object.values(gist.files);

      return {
        id: gist.id,
        url: gist.html_url,
        files: files,
        title: gist.description || settings.gist.title,
        language: files[0].language || GistLanguages.github
      };
    });
  }
};
