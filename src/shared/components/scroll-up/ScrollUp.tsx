import React from 'react'
import {withNamespaces} from 'react-i18next'
import styles from './ScrollUp.module.css'

import {ReactComponent as ArrowUpIcon} from '../../../assets/images/icons/arrow-up.svg'

const ScrollUp = ({t}: any) => {
  const scrollTop = () =>
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })

  return (
    <button className={styles.button} onClick={scrollTop} title={t('scroll-up.title')}>
      <span className={styles.arrow}>
        <ArrowUpIcon />
      </span>
    </button>
  )
}

export default withNamespaces()(ScrollUp)
