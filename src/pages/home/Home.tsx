import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {withNamespaces} from 'react-i18next'

import Header from '../../containers/header/Header'
import Gists from '../../containers/gists/Gists'
import Footer from '../../containers/footer/Footer'
import Work from '../../containers/work/Work'
import Repositories from '../../containers/repositories/Repositories'
import PictureCircle from '../../shared/components/picture-circle/PictureCircle'

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
          storageService.setItem('intro', 'initialized')
        }, 2000)
      }
    } else {
      setFadeIntro(true)
    }

    console.time('homeState')
    console.log(homeState)
    console.timeEnd('homeState')
  }, [homeState, storageService])

  const cpPictureCircle = (
    <PictureCircle
      image={{src: husband, alt: 'Gabriel Lima', title: 'Please wait'}}
      className={styles['loading-picture']}
      text={t('intro.welcome')}
    />
  )

  return (
    <>
      {loading && (
        <Loading
          className={`${styles.loading} ${fadeIntro ? styles['fade-loading'] : ''}`}
          component={cpPictureCircle}
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
