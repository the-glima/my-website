import React, {useEffect} from 'react'
import {withNamespaces} from 'react-i18next'
import {useSelector} from 'react-redux'

import Headings from '../../shared/components/headings/Headings'
import SeeMore from '../../shared/components/see-more/SeeMore'
import Loading from '../../shared/components/loading/Loading'
import {ReactComponent as GitHubLogo} from '../../assets/images/social/github.svg'
import {settings} from '../../settings'

import {GistsState} from './redux/GistsReducer'

import styles from './Gists.module.css'
import Message from './components/Message'
import GistsList from './components/GistsList'
import {domService} from '../../shared/services/DOMService'

import {useFetchGists} from './hooks/UseGists.hook'

const Gists = ({t}: any) => {
  const fetchGists = useFetchGists()
  const gistsState: GistsState = useSelector((state: any) => state.gists)

  useEffect(() => {
    let ignore = false

    if (!ignore) {
      domService.observeSection({
        element: document.getElementById('section-gists'),
        threshold: settings.loading.threshold,
        callback: fetchGists
      })
    }

    return () => {
      ignore = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="section-gists" className={`section ${styles['section-gists']}`}>
      <div className="section-content">
        {gistsState.isLoading ? (
          <Loading className={styles['gists-loading']} image={GitHubLogo} text="Loading Gists..." />
        ) : (
          <>
            <Headings title={t('gists.title')} subtitle={t('gists.subtitle')} />

            {!!gistsState.hasError ? (
              <Message show={!!gistsState.hasError} message={t('error.message')} />
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
