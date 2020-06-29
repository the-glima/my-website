import React from 'react'
import {withNamespaces} from 'react-i18next'
import styles from './Social.module.css'
import {SocialData, SocialModel} from './SocialData'

const Social = ({t, props}: any) => {
  const socialData = SocialData(t)

  return (
    <ul className={`${props.className} ${styles.list}`}>
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

export default withNamespaces()(Social)
