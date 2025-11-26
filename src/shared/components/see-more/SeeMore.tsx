import React from 'react'
import {withTranslation} from 'react-i18next'

import styles from './SeeMore.module.css'

interface ISeeMore {
  t: Function;
  url?: string;
  text?: string;
}

const SeeMore = ({t, url, text}: ISeeMore) => {
  return (
    <div className={styles.wrapper}>
      <a className={`${styles['section-link']} link`} href={url}>
        {text || t('see-more.link')}
      </a>
    </div>
  )
}

export default withTranslation()(SeeMore)
