import React, { useState, useEffect } from "react"
import './Gists.css'

import {GistDOMModel} from './GistsModel'
import {GistsService} from './GistsService'
import {gistsGetLogo} from './GistsGetLogo'

const Gists = () => {
  const [gists, setGists]: any = useState([])
  
  useEffect(() => {
    const fetchGists = async () => {
      const result = await GistsService.mapGists()
      setGists(result)
    }

    fetchGists()
  }, [])

  return (
    <section className="section section-gists lasjdkajd klajd klasjd lasjdaklsjdak ljdalkjdasjdlaksjdlaskjdalksdjasl kdjalksjdalksd asdasdasd">
      <h3>Latest Gists</h3>
      <h4>No time for blogging, sorry</h4>

      <ul className="gists-list">
        {gists.map((gist: GistDOMModel, i: number) =>
          <li key={i}>
            <a className="gist-link" href={gist.url} title={`Check this gist: ${gist.title}`}>
              <img 
                className="gist-logo"
                src={gistsGetLogo(gist.language.toLowerCase())?.src} 
                alt={gist.language}
              />
              <span className="gist-title">{gist.title}</span> 
            </a>
          </li>
        )}
      </ul>

      <div className="gist-section-link">
        <a href="https://gist.github.com/the-glima">See More</a>
      </div>
    </section>
  )
}

export default Gists
