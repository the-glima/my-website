import React from 'react'
import styles from './Intro.module.css'
import {IntroModel} from './IntroModel'
import {settings} from '../../settings'
import profile from '../../../assets/images/photos/me.jpg'

const Intro = () => {
  const randomizePosition = (): IntroModel => {
    const titles: IntroModel[] = Object.values(settings.intro.positionOptions)
    const subTitleOptions = titles.map((item) => item.title)
    const randomness = Math.floor(Math.random() * subTitleOptions.length)
    const defaultTitle = titles.find((item) => item.default)

    return titles[randomness] || defaultTitle
  }

  const positionItem = randomizePosition()

  return (
    <section className={`section ${styles['section-intro']}`}>
      <div className="section-content">
        <header className={styles.header}>
          <img className={styles.picture} src={profile} alt="Gabriel Lima" />

          <h1 className={`${styles.heading} `}>
            <div className={styles.intro}>Hi, my name is</div>
            <div className={styles.name}>Gabriel Lima</div>
            <div className={styles.position} style={positionItem.jsxCss && positionItem.jsxCss}>
              {positionItem.title}
            </div>
          </h1>
        </header>

        <p className={styles.bio}>
          I build things for the web and love what I do. Mainly focused on <strong>Front-end Development</strong> with a good <strong>UI/UX</strong> taste
          but always trying different things.
        </p>
      </div>
    </section>
  )
}

export default Intro
