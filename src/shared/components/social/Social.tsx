import React from 'react'
import { withTranslation } from 'react-i18next'

import styles from './Social.module.css'
import {SocialData, SocialModel} from './SocialData'

interface ISocial {
  t: Function;
  className?: string;
}

const Social = ({t, className}: ISocial) => {
  const socialData = SocialData(t)

  return (
    <ul className={`${className} ${styles.list}`}>
      {socialData.map((social: SocialModel, i: number) => (
        <li key={i}>
          <a className={styles.link} href={social.url} title={social.title}>
            <span className={`${styles.social} ${styles[`logo-${social.name.toLowerCase()}`]}`}>
              <social.logo />
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default withTranslation()(Social)
