import React from 'react'
import { withNamespaces } from 'react-i18next'
import styles from './Social.module.css'
import { SocialData, SocialModel } from './SocialData'

const Social = ({t, props}: any) => {
  const socialData = SocialData(t)

  return (
    <ul className={`${props.className} ${styles.list}`}>
      {socialData.map((social: SocialModel, i: number) => (
        <li key={i}>
          <a className={styles.link} href={social.url} title={social.title}>
            <img className={`${styles.social} social-logo`} src={social.scrImage} alt={`${social.name} Logo`} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default withNamespaces()(Social)
