import React from 'react'
import {withNamespaces} from 'react-i18next'
import styles from './ScrollUp.module.css'

import arrowUp from '../../../assets/images/icons/arrow-up.svg'

const ScrollUp = ({ t }: any) => {
  const scrollTop = () => window.scroll({
    top: 0,
    behavior: 'smooth'
  })

  return (
    <button className={styles.button} onClick={scrollTop} title={t('scroll-up.title')}>
      <img className={`${styles.arrow} dark-logo`} src={arrowUp} alt="Arrow up icon" />
    </button>
  )
}

export default withNamespaces()(ScrollUp)
