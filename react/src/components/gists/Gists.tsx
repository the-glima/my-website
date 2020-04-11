import React, { useState, useEffect } from 'react';
import './Gists.css';

import {GistDOMModel} from '../../models/gists.model';
import {GistsService} from '../../services/gists.service';
import {logoLoader} from '../../assets/images/get-logos'

function Gists() {
  const [gists, setGists]: any = useState([])

  useEffect(() => {
    (async () => setGists(await GistsService.mapGists()) )();
  }, [gists]);

  return (
    <section className="section section-gists">
      <h3>Latest Gists</h3>
      <h4>No time for blogging, sorry</h4>

      <ul className="gists-list">
        {gists.map((gist: GistDOMModel, i: number) =>
          <li key={i}>
            <a className="gist-link" href={gist.url} title={`Check this gist: ${gist.title}`}>
              <img 
                className="gist-logo"
                src={logoLoader(gist.language.toLowerCase())} 
                alt={gist.language}
              />
              <span className="gist-title">{gist.title}</span> 
            </a>
          </li>
        )}
      </ul>

      <div className="gist-section-link">
        <a href="https://gist.github.com/the-glima" target="_blank">See More</a>
      </div>
    </section>

  );
}

export default Gists;
