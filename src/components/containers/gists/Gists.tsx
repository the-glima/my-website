import React, {useState, useEffect} from 'react'
import styles from './Gists.module.css'
import Headings from '../../shared/headings/Headings'
import SeeMore from '../../shared/see-more/SeeMore'

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
    <section className={`section ${styles['section-gists']}`}>
      <div className="section-content">
        <Headings title="Latest Gists" subtitle="Don’t have a blog yet but I have gists" />

        <ul className={styles.list}>
          {gists.map((gist: GistDOMModel, i: number) => (
            <li key={i} className={`${styles['list-item']}`}>
              <img className={styles.logo} src={gistsGetLogo(gist.language.toLowerCase())?.src} alt={gist.language} />
              <a className={styles.link} href={gist.url} title={`Check this gist: ${gist.title}`}>
                {gist.title}
              </a>
            </li>
          ))}
        </ul>

        <SeeMore url="https://gist.github.com/the-glima" />
      </div>
    </section>
  )
}

export default Gists
