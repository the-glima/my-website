import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {withNamespaces} from 'react-i18next'

import Header from '../../containers/header/Header'
import Gists from '../../containers/gists/Gists'
import Footer from '../../containers/footer/Footer'
import Work from '../../containers/work/Work'
import Repositories from '../../containers/repositories/Repositories'
import Personality from '../../shared/components/personality/Personality'

import StorageService from '../../shared/services/StorageService'

import husband from '../../assets/images/photos/husband.jpg'
import Loading from '../../shared/components/loading/Loading'

import styles from './Home.module.css'

const Home = ({t}: any) => {
  const [loading, setLoading]: any = useState(false)
  const [fadeIntro, setFadeIntro]: any = useState(false)
  const homeState = useSelector((state: any) => state.home)
  const storageService = StorageService('session')

  useEffect(() => {
    const isIntroSaved = storageService.getItem('intro')

    if (!isIntroSaved) {
      if (!homeState.isInitialized) {
        setLoading(true)
      } else {
        setTimeout(() => {
          setFadeIntro(true)
          setLoading(false)
          storageService.setItem('intro', 'initialized')
        }, 2000)
      }
    } else {
      setFadeIntro(true)
    }
  }, [homeState, storageService])

  const cpPersonality = (
    <Personality
      image={{
        src: husband,
        alt: 'Gabriel Lima'
      }}
      className={styles['loading-picture']}
      spinning={true}
      text={t('intro.welcome')}
    />
  )

  return (
    <>
      {loading && (
        <Loading
          className={`${styles.loading} ${fadeIntro ? styles['fade-loading'] : ''}`}
          component={cpPersonality}
        />
      )}

      <div className={`${styles.hidden} ${fadeIntro ? styles['fade-content'] : ''}`}>
        <Header />
        <Repositories />
        <Work />
        <Gists />
        <Footer />
      </div>
    </>
  )
}

export default withNamespaces()(Home)
