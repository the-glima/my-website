import React, {useEffect} from 'react'
import {withNamespaces} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'

import Headings from '../../shared/components/headings/Headings'
import SeeMore from '../../shared/components/see-more/SeeMore'
import Loading from '../../shared/components/loading/Loading'
import {ReactComponent as GitHubLogo} from '../../assets/images/social/github.svg'
import {settings} from '../../settings'

import * as actions from './redux/GistsActions'
import {GistsState} from './redux/GistsReducer'

import styles from './Gists.module.css'
import {GistsService} from './services/GistsService'
import Message from './components/Message'
import GistsList from './components/GistsList'
import {domService} from '../../shared/services/DOMService'

const Gists = ({t}: any) => {
  const dispatch = useDispatch()
  const gistsState: GistsState = useSelector((state: any) => state.gists)
  const isLoading: GistsState = useSelector((state: any) => state.gists.isLoading)
  const hasError: GistsState = useSelector((state: any) => state.gists.hasError)

  useEffect(() => {
    let ignore = false

    const fetchGists = async () => {
      dispatch(actions.fetchGistsInit())

      try {
        if (!ignore) {
          const response = await GistsService.fetchGists()
          const gistData = await GistsService.save(response)

          setTimeout(() => {
            dispatch(actions.fetchGistsSuccess(gistData))
          }, settings.loading.delay)
        }
      } catch (error) {
        dispatch(actions.fetchGistsFailure(error))
      }
    }

    domService.observeSection({
      element: document.getElementById('section-gists'),
      threshold: settings.loading.threshold,
      callback: fetchGists
    })

    return () => {
      ignore = true
    }
  }, [dispatch])

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
