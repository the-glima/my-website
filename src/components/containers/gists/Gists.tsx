import React, {useEffect} from 'react'
import {withNamespaces} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'

import styles from './Gists.module.css'
import Headings from '../../shared/headings/Headings'
import SeeMore from '../../shared/see-more/SeeMore'

import {GistDOMModel, GistsData} from './GistsModel'
import {GistsEffect} from './GistsEffect'
import {gistsGetLogo} from './GistsGetLogo'

import * as actions from './GistsActions'
import {GistsState} from './GistsReducer'

const Gists = ({t}: any) => {
  const dispatch = useDispatch()
  const gistsState: GistsState = useSelector((state: any) => state.gists)

  const saveGists = (state: any) => {
    GistsEffect.setGistsLocalStorage(state)
    dispatch(actions.setGists(state))
  }

  const createGistsObject = (gists: GistDOMModel[]): GistsData => ({
    date: Date.now(),
    collection: gists
  })

  useEffect(() => {
    let ignore = false

    const fetchGists = async () => {
      const gistsLocalStorage = GistsEffect.getGistsLocalStorage()

      if (!gistsLocalStorage || GistsEffect.shouldSetGistsLocalStorage(gistsLocalStorage)) {
        const collection = await GistsEffect.mapGists()
        const gistsObject = createGistsObject(collection)

        !ignore && collection.length ? saveGists(gistsObject) : dispatch(actions.setGists({data: null}))
      } else if (!ignore) {
        dispatch(actions.setGists(gistsLocalStorage))
      }
    }

    fetchGists()
    return () => {
      ignore = true
    }
  }, [])

  return (
    <section className={`section ${styles['section-gists']}`}>
      <div className="section-content">
        <Headings title={t('gists.title')} subtitle={t('gists.subtitle')} />

        {!gistsState?.data?.collection ? (
          <p className={styles.error}>
            <span role="img" aria-label="Confused Face">
              😕
            </span>{' '}
            {t('error.message')}
          </p>
        ) : (
          ''
        )}

        {gistsState?.data?.collection && (
          <ul className={styles.list} data-testid="item">>
            {gistsState?.data?.collection.map((gist: GistDOMModel, i: number) => (
              <li key={i} className={`${styles['list-item']}`} data-testid="gist-item">
                <img className={styles.logo} src={gistsGetLogo(gist.language.toLowerCase())?.src} alt={gist.language} />
                <a className={styles.link} href={gist.url} title={`Check this gist: ${gist.title}`}>
                  {gist.title}
                </a>
              </li>
            ))}
          </ul>
        )}

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
