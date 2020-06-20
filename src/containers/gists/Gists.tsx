import React, {useEffect, useCallback} from 'react'
import {withNamespaces} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'

import Headings from '../../shared/components/headings/Headings'
import SeeMore from '../../shared/components/see-more/SeeMore'
import Loading from '../../shared/components/loading/Loading'
import TechLogo from '../../shared/components/tech-logo/TechLogo'
import {ReactComponent as GitHubLogo} from '../../assets/images/social/github.svg'
import {settings} from '../../settings'

import * as actions from './redux/GistsActions'
import {GistsState} from './redux/GistsReducer'

import styles from './Gists.module.css'
import {GistDOMModel, GistsData} from './models'
import {GistsService} from './services/GistsService'
import {GistTechLogosService} from './services/GistTechLogosService'
import Message from './components/Message'
import GistsList from './components/GistsList'

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

  const setGistsLocalStorage = useCallback(
    async (response: any) => {
      const gistsLocalStorage: GistsData = GistsService.getGistsLocalStorage()

      if (gistsLocalStorage && !GistsService.shouldSetGistsLocalStorage(gistsLocalStorage)) {
        dispatch(actions.fetchGistsLocalStorageSuccess(gistsLocalStorage))
      } else {
        const gistsCollection = GistsService.getGists(response)

        const gistTechLogos = gistsCollection.length ? await GistTechLogosService.getTechLogos() : []

        const data: GistsData = {
          date: Date.now(),
          collection: gistsCollection,
          logos: gistTechLogos
        }

        setTimeout(() => {
          dispatch(actions.fetchGistsSuccess(data))
          GistsService.setGistsLocalStorage(data)
        }, settings.loading.delay)
      }
    },
    [dispatch]
  )

  useEffect(() => {
    let ignore = false

    const fetchGists = async () => {
      dispatch(actions.fetchGistsInit())

      try {
        if (!ignore) {
          const response = await GistsService.fetchGists()
          setGistsLocalStorage(response)
        }
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
        {isLoading ? (
          <Loading className={styles['gists-loading']} image={GitHubLogo} text="Loading Gists..." />
        ) : (
          <>
            <Headings title={t('gists.title')} subtitle={t('gists.subtitle')} />

            {!!hasError ? (
              <Message show={!!hasError} message={t('error.message')} />
            ) : (
              <>
                <GistsList
                  className={styles.list}
                  collection={gistsState?.data?.collection}
                  logos={gistsState?.data?.logos}
                  noGistsMessage={t('gists.no-gists')}
                />

                <SeeMore
                  props={{
                    url: 'https://gist.github.com/the-glima',
                    text: t('gists.see-more')
                  }}
                />
              </>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default withNamespaces()(Gists)
