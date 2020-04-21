import React from 'react'
import styles from './Social.module.css'

import linkedin from '../../../assets/images/logos/linkedin.svg'
import twitter from '../../../assets/images/logos/twitter.svg'
import github from '../../../assets/images/logos/github.svg'

interface Link {
  name: string
  url: string
  scrImage: string
  title: string
}

const Social = (props: any) => {
  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gabriel--lima/',
      scrImage: linkedin,
      title: 'Check my LinkedIn Profile'
    },
    {
      name: 'Twitter',
      url: 'https://www.linkedin.com/in/gabriel--lima/',
      scrImage: twitter,
      title: 'Follow me on Twitter'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/the-glima',
      scrImage: github,
      title: 'Judge my code on GitHub'
    }
  ]

  return (
    <ul className={`${props.className} ${styles.list}`}>
      {links.map((link: Link, i: number) => (
        <li key={i}>
          <a className={styles.link} href={link.url} title={link.title}>
            <img className={`${styles.link} social-logo`}  src={link.scrImage} alt={`${link.name} Logo`} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
