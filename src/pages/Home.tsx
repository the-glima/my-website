import React, { useEffect, useState } from 'react'

import Intro from '../containers/intro/Intro'
import Gists from '../containers/gists/Gists'
import Footer from '../containers/footer/Footer'
import Work from '../containers/work/Work'
import Repositories from '../containers/repositories/Repositories'
import PictureCircle from '../shared/components/picture-circle/PictureCircle'

import husband from '../assets/images/photos/husband.jpg'
import Loading from '../shared/components/loading/Loading'

import styles from './Home.module.css'

function Home() {
  const [loading, setLoading]: any = useState(true)
  const [fadeIntro, setFadeIntro]: any = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFadeIntro(true)
    }, 3000)

    setTimeout(() => {
      setLoading(false)
    }, 3200)
  }, [])

  const cpPictureCircle = 
    <PictureCircle 
      image={{ src: husband, alt: 'Gabriel Lima', title: 'Please wait' }} 
      className={styles.picture}
      text="Welcome..."
    />

  return (
    <>
      {loading ? (
        <Loading className={`${styles['home-loading']} ${fadeIntro ? styles['fade-intro'] : ''}`} component={cpPictureCircle} />
      ) : (
        <div className={styles['fade-content']}>
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
