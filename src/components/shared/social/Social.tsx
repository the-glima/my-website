import React from 'react'
import {withNamespaces} from 'react-i18next'
import styles from './Social.module.css'
import {SocialLink} from './SocialModel'

import linkedin from '../../../assets/images/logos/linkedin.svg'
import twitter from '../../../assets/images/logos/twitter.svg'
import github from '../../../assets/images/logos/github.svg'
import spotify from '../../../assets/images/logos/spotify.svg'

const Social = ({t, props}: any) => {
  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gabriel--lima/',
      scrImage: linkedin,
      title: t('social.titles.linkedin')
    },
    {
      name: 'Twitter',
      url: 'https://www.linkedin.com/in/gabriel--lima/',
      scrImage: twitter,
      title: t('social.titles.twitter')
    },
    {
      name: 'GitHub',
      url: 'https://github.com/the-glima',
      scrImage: github,
      title: t('social.titles.github')
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/playlist/2nbyGPsu5UjhwzIwHkL1ZF?si=eLDVmJ8xSLOOA57mWuHDKQ',
      scrImage: spotify,
      title: t('social.titles.spotify')
    }
  ]

  return (
    <ul className={`${props.className} ${styles.list}`}>
      {links.map((link: SocialLink, i: number) => (
        <li key={i}>
          <a className={styles.link} href={link.url} title={link.title}>
            <img className={`${styles.link} social-logo`} src={link.scrImage} alt={`${link.name} Logo`} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default withNamespaces()(Social)
