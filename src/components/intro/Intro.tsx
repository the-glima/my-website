import React from 'react'
import styles from './Intro.module.css'

import {settings} from '../../settings'
import profile from '../../assets/images/photos/me.jpg'

const Intro = () => {
  const randomizeTitle = (): any => {
    const titles = Object.values(settings.intro.subTitleOptions)
    const subTitleOptions = titles.map((item) => item.title)
    const randomness = Math.floor(Math.random() * subTitleOptions.length)
    const defaultTitle = titles.find((item) => item.default)

    return titles[randomness] || defaultTitle
  }

  const titleItem = randomizeTitle()

  return (
    <section className="section text-center">
      <header className={`${styles.header} d-flex-inline flex-column align-items-center text-left`}>
        <div>
          <img className={styles.picture} src={profile} alt="Gabriel Lima" />
        </div>

        <h1 className={`${styles.heading} d-flex flex-column text-center`}>
          <small className={styles.intro}>Hi, my name is</small>
          <strong className={styles.name}>Gabriel Lima</strong>
          <span className={styles.title} style={titleItem.jsxCss || null}>
            {titleItem.title}
          </span>
        </h1>
      </header>

      <p className={styles.bio}>
        I build things for the web and love what I do. Mainly focused on Front-end Development with a good UI/UX taste
        but always trying different things.
      </p>
    </section>
  )
}

export default Intro
