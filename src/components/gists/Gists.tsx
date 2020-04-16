import React, {useState, useEffect} from 'react'
import styles from './Gists.module.css'

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
    <section className={`section ${styles['section-gists']} text-center`}>
      <header className="text-center">
        <h2>Latest Gists</h2>
        <h3>Don’t have a blog yet but I have gists</h3>
      </header>

      <ul className={styles.list}>
        {gists.map((gist: GistDOMModel, i: number) => (
          <li key={i}>
            <a className={styles.link} href={gist.url} title={`Check this gist: ${gist.title}`}>
              <img className={styles.logo} src={gistsGetLogo(gist.language.toLowerCase())?.src} alt={gist.language} />
              <span className={styles.title}>{gist.title}</span>
            </a>
          </li>
        ))}
      </ul>

      <div>
        <a className={styles['section-link']} href="https://gist.github.com/the-glima">See More</a>
      </div>
    </section>
  )
}

export default Gists
