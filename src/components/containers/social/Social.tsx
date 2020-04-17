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

const Social = () => {
  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gabriel--lima/',
      scrImage: linkedin,
      title: 'Recruiter, check my LinkedIn Profile'
    },
    {
      name: 'Twitter',
      url: 'https://www.linkedin.com/in/gabriel--lima/',
      scrImage: twitter,
      title: 'Twitter user, follow me if cou can'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/the-glima',
      scrImage: github,
      title: 'Developer, you can judge my code on GitHub'
    }
  ]

  return (
    <section className="section section-social-links">
      <ul className={`${styles.list} d-flex justify-content-around`}>
        {links.map((link: Link, i: number) => (
          <li key={i} className="d-flex flex-column justify-content-between">
            <a className={styles.link} href={link.url} title={link.title}>
              <img className={styles.logo} src={link.scrImage} alt={`${link.name} Logo`} />
              <span className={styles.name}>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Social
