import React, {useEffect, useState, useCallback} from 'react'

import Intro from '../containers/intro/Intro'
import Gists from '../containers/gists/Gists'
import Footer from '../containers/footer/Footer'
import Work from '../containers/work/Work'
import Repositories from '../containers/repositories/Repositories'
import PictureCircle from '../shared/components/picture-circle/PictureCircle'

import husband from '../assets/images/photos/husband.jpg'
import Loading from '../shared/components/loading/Loading'

import styles from './Home.module.css'

import StorageService from '../shared/services/StorageService'

function Home() {
  const [loading, setLoading]: any = useState(false)
  const [fadeIntro, setFadeIntro]: any = useState(false)
  const storageService = StorageService('session')

  const setSessionStorage = useCallback(() => {
    storageService.setItem('intro', 'initialized')
  }, [storageService])

  useEffect(() => {
    const isIntroSaved = storageService.getItem('intro')

    if (!isIntroSaved) {
      setLoading(true)
      // document.documentElement.classList.add('loading')

      setTimeout(() => {
        setFadeIntro(true)
      }, 1600)

      setTimeout(() => {
        setLoading(false)
        setSessionStorage()
        // document.documentElement.classList.remove('loading')
      }, 1800)
    } else {
      setFadeIntro(false)
      setLoading(false)
    }
  }, [])

  const cpPictureCircle = (
    <PictureCircle
      image={{src: husband, alt: 'Gabriel Lima', title: 'Please wait'}}
      className={styles.picture}
      text="Welcome..."
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
          <Intro />
          <Repositories />
          <Work />
          <Gists />
          <Footer />
        </div>
      )}
    </>
  )
}

export default Home
