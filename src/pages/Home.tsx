import React, {useEffect, useState, useCallback} from 'react'
import {withNamespaces} from 'react-i18next'

import Header from '../containers/header/Header'
import Gists from '../containers/gists/Gists'
import Footer from '../containers/footer/Footer'
import Work from '../containers/work/Work'
import Repositories from '../containers/repositories/Repositories'
import PictureCircle from '../shared/components/picture-circle/PictureCircle'

import StorageService from '../shared/services/StorageService'

import husband from '../assets/images/photos/husband.jpg'
import Loading from '../shared/components/loading/Loading'

import styles from './Home.module.css'

const Home = ({t}: any) => {
  const [loading, setLoading]: any = useState(true)
  const [fadeIntro, setFadeIntro]: any = useState(false)
  const storageService = StorageService('session')

  const setSessionStorage = useCallback(() => {
    storageService.setItem('intro', 'initialized')

    setLoading(false)
    setTimeout(() => setFadeIntro(false), 700)
  }, [storageService])

  useEffect(() => {
    const isIntroSaved = storageService.getItem('intro')

    if (!isIntroSaved) {
      setTimeout(() => setFadeIntro(true), 1600)
      setTimeout(setSessionStorage, 1800)
    } else {
      setLoading(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const cpPictureCircle = (
    <PictureCircle
      image={{src: husband, alt: 'Gabriel Lima', title: 'Please wait'}}
      className={styles.picture}
      text={t('intro.welcome.0')}
    />
  )

  return (
    <>
      {loading ? (
        <Loading
          className={`${styles['home-loading']} ${fadeIntro ? styles['fade-intro'] : ''}`}
          component={cpPictureCircle}
        />
      ) : (
        <div className={`${fadeIntro ? styles['fade-content'] : ''}`}>
          <Header />
          <Repositories />
          <Work />
          <Gists />
          <Footer />
        </div>
      )}
    </>
  )
}

export default withNamespaces()(Home)
