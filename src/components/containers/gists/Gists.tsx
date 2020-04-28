import React, { useState, useEffect } from 'react'
import { withNamespaces } from 'react-i18next'
import styles from './Gists.module.css'
import Headings from '../../shared/headings/Headings'
import SeeMore from '../../shared/see-more/SeeMore'

import { GistDOMModel } from './GistsModel'
import { GistsEffect } from './GistsEffect'
import { gistsGetLogo } from './GistsGetLogo'

const Gists = ({t}: any) => {
  const [gists, setGists]: any = useState([])

  const saveGists = (state: any) => {
    GistsEffect.setGistsLocalStorage(state)
    setGists(state)
  }

  useEffect(() => {
    (async () => {
      const gistsLocalStorage = GistsEffect.getGistsLocalStorage()

      if (!gistsLocalStorage || GistsEffect.shouldSetGistsLocalStorage(gistsLocalStorage)) {
        const result = { data: await GistsEffect.mapGists() }

        saveGists(result.data)
      } else {
        setGists(gistsLocalStorage.data)
      }
    })();
  }, [])

  return (
    <section className={`section ${styles['section-gists']}`}>
      <div className="section-content">
        <Headings title={t('gists.title')} subtitle={t('gists.subtitle')} />

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

        <SeeMore
          props={{
            url: 'https://gist.github.com/the-glima',
            text: t('gists.see-more')
          }}
        />
      </div>
    </section>
  )
}

export default withNamespaces()(Gists)
