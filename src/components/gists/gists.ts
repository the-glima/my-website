import {GistDOMModel} from './model';
import {gistsService} from './service';

const SectionGists = async () => {
  const gistsList = await gistsService.mapGists();
  const gistListElement = document.getElementById('gists-list');

  gistsList.forEach((gist: GistDOMModel) => {
    if (!gistListElement) return;

    const html = `
      <li>
        <a href="${gist.url}"><strong>${gist.language}</strong> ${gist.title}</a>
      </li>
    `;
    gistListElement.insertAdjacentHTML('afterbegin', html);
  });
};

SectionGists();
