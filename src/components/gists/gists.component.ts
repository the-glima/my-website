import {GistDOMModel} from '../../models/gists.model';
import {GistsService} from '../../services/gists.service';
import {settings} from '../../settings';

export const GistsComponent = {
  render: async function() {
    const gistsList = await GistsService.mapGists();
    const gistListElement = document.getElementById('gists-list');

    gistsList.forEach((gist: GistDOMModel) => {
      if (!gistListElement || !gistsList.length) return;

      const html = `
        <li>
          <a class="gist-link" href="${gist.url}" title="Check this gist: ${gist.title}">
            <img 
              class="gist-logo"
              src="assets/images/logos/${gist.language.toLowerCase()}.svg" 
              alt="${gist.language}"
              onerror="this.src = '${settings.gist.languageImgPath}'" 
            >
            <span class="gist-title">${gist.title}</span> 
          </a>
        </li>
      `;
      gistListElement.insertAdjacentHTML('beforeend', html);
    });
  }
};
