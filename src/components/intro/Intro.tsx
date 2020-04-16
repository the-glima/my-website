import React from 'react'
import styles from './Intro.module.css'

import {settings} from '../../settings'
import profile from '../../assets/images/photos/me.jpg'
import profile2x from '../../assets/images/photos/me@2x.jpg'
import profile3x from '../../assets/images/photos/me@3x.jpg'
import profile4x from '../../assets/images/photos/me@4x.jpg'

const Intro = () => {
  const randomizeSubTitle = (): string => {
    const subTitleOptions = settings.intro.subTitleOptions
    const randomness = Math.floor(Math.random() * subTitleOptions.length)

    return subTitleOptions[randomness] || subTitleOptions[0]
  }

  return (
    <section className="section text-center">
      <header className={`${styles.header} d-flex-inline flex-column align-items-center text-left`}>
        <div>
          <img
            className={styles.picture}
            src={profile}
            srcSet={`${profile2x} 2x,${profile3x} 3x, ${profile4x} 4x`}
            alt="Gabriel Lima"
          />
        </div>
        
        <h1 className={`${styles.heading} d-flex flex-column text-center`}>
          <small className={styles.intro}>Hi, my name is</small>
          <strong className={styles.name}>Gabriel Lima</strong>
          <span className={styles.title}>{randomizeSubTitle()}</span>
        </h1>
      </header>

      <p className={styles.bio}>I build things for the web and love what I do. Mainly focused on Front-end Development with a good UI/UX taste but always trying different things.
      </p>
    </section>
  )
}

export default Intro
