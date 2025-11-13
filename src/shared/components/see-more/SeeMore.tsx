import React from 'react'
import { withTranslation } from 'react-i18next'
import styles from './SeeMore.module.css'

const SeeMore = ({ t, url, text }: any) => {
  return (
    <div className={styles.wrapper}>
      <a className={styles['section-link']} href={url}>
        {text || t('see-more.link')}
      </a>
    </div>
  )
}

export default withTranslation()(SeeMore)
