import React, {useEffect, useState} from 'react'
import {withNamespaces} from 'react-i18next'

import '../home/Home.module.css'
import styles from './Ka.module.css'

const Ka = ({t}: any) => {
  const [fadeIntro, setFadeIntro]: any = useState(false)

  const navigate = (url: string) => {
    setTimeout(() => window.location.href = url, 1000)
  }

  useEffect(() => {
    setTimeout(() => {
      setFadeIntro(true)
    })
  }, [])

  return (
    <div className={`home  ${fadeIntro ? 'home-initialized' : ''} ${styles.container}`}>
      <span className={styles['bull']}>🐂</span>
      <h1>Quer namorar comigo?</h1>

      <div className={styles['options']}>
        <label 
          className={`${styles['radio-wrapper']} ${styles['yes']}`} 
          onClick={() => navigate('https://youtu.be/izlS0qG7zbA?t=25')}>
          <input type="radio" name="option"/>
          <span className={styles['radio']}></span>
          <span className={styles['radio-label']}>Sim</span>
        </label>
        <label 
          className={`${styles['radio-wrapper']} ${styles['no']}`} 
          onClick={() => navigate('https://www.youtube.com/watch?v=DVOyxYSEU-o&ab_channel=YodaEfendi')}>
          <input type="radio" name="option"/>
          <span className={styles['radio']}></span>
          <span className={styles['radio-label']}>Não</span>
        </label>
      </div>
    </div>  
  )
}

export default withNamespaces()(Ka)
