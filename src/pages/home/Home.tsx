import React, {useEffect, useState} from 'react'
import {withNamespaces} from 'react-i18next'

import Header from '../../containers/header/Header'
import Gists from '../../containers/gists/Gists'
import Footer from '../../containers/footer/Footer'
import Work from '../../containers/work/Work'
import Repositories from '../../containers/repositories/Repositories'

import './Home.module.css'

const Home = ({t}: any) => {
  const [fadeIntro, setFadeIntro]: any = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFadeIntro(true)
    })
  }, [])

  return (
    <div className={`home  ${fadeIntro ? 'home-initialized' : ''}`}>
      <Header />
      <Repositories />
      <Work />
      <Gists />
      <Footer />
    </div>
  )
}

export default withNamespaces()(Home)
