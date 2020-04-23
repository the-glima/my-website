import React from 'react'
import {withNamespaces} from 'react-i18next'
import styles from './SeeMore.module.css'

const SeeMore = ({t, props}: any) => {
  return (
    <div className={styles.wrapper}>
      <a className={styles['section-link']} href={props.url}>
        {props.text || t('see-more.link')}
      </a>
    </div>
  )
}

export default withNamespaces()(SeeMore)
