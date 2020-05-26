import React, {useEffect, useCallback} from 'react'
import {withNamespaces} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'

import Headings from '../../shared/components/headings/Headings'
import SeeMore from '../../shared/components/see-more/SeeMore'
import Loading from '../../shared/components/loading/Loading'
import {ReactComponent as GitHubLogo} from '../../assets/images/logos/github.svg'
import {settings} from '../../settings'

import * as actions from './redux/GistsActions'
import {GistsState} from './redux/GistsReducer'

import styles from './Gists.module.css'
import {GistDOMModel, GistsData} from './models'
import {GistsService} from './services/GistsService'
import {GistsGetLogoUtil} from './utils/GistsGetLogoUtil'

const Gists = ({t}: any) => {
  const dispatch = useDispatch()
  const gistsState: GistsState = useSelector((state: any) => state.gists)
  const isLoading: GistsState = useSelector((state: any) => state.gists.isLoading)
  const hasError: GistsState = useSelector((state: any) => state.gists.hasError)

  const observeSection = useCallback(async (effect: any) => {
    const options = {threshold: settings.loading.threshold}

    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting && entry.intersectionRatio >= settings.loading.threshold) {
          effect()
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(document.getElementById('section-gists') as any)
  }, [])

  const setGistsLocalStorage = useCallback(async () => {
    const gistsLocalStorage: GistsData = GistsService.getGistsLocalStorage()

    if (gistsLocalStorage && !GistsService.shouldSetGistsLocalStorage(gistsLocalStorage)) {
      dispatch(actions.fetchGistsLocalStorageSuccess(gistsLocalStorage))
    } else {
      const gistsCollection = await GistsService.mapGists()
      const data: GistsData = {
        date: Date.now(),
        collection: gistsCollection
      }

      if (data?.collection?.length) {
        dispatch(actions.fetchGistsSuccess(data))
        GistsService.setGistsLocalStorage(data)
      }
    }
  }, [dispatch])

  useEffect(() => {
    let ignore = false

    const fetchGists = async () => {
      dispatch(actions.fetchGistsInit())

      try {
        if (!ignore) setGistsLocalStorage()
      } catch (error) {
        dispatch(actions.fetchGistsFailure(error))
      }
    }
    
    observeSection(() => {
      fetchGists()
    })

    return () => {
      ignore = true
    }
  }, [dispatch, setGistsLocalStorage, observeSection])

  return (
    <section id="section-gists" className={`section ${styles['section-gists']}`}>
      <div className="section-content">
        {isLoading && <Loading className={styles['gists-loading']} image={GitHubLogo} text="Loading Gists..." />}

        <Headings title={t('gists.title')} subtitle={t('gists.subtitle')} />

        {hasError && (
          <p className={styles.error}>
            <span role="img" aria-label="Confused Face">
              😕
            </span>{' '}
            {t('error.message')}
          </p>
        )}

        {!hasError && !isLoading && (
          <>
            <ul className={styles.list}>
              {gistsState?.data?.collection.map((gist: GistDOMModel, i: number) => (
                <li key={i} className={`${styles['list-item']}`} data-testid="gist-item">
                  <img
                    className={styles.logo}
                    src={GistsGetLogoUtil(gist.language.toLowerCase())?.src}
                    alt={gist.language}
                  />
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
          </>
        )}
      </div>
    </section>
  )
}

export default withNamespaces()(Gists)
