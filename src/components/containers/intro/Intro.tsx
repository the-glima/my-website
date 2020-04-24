import React from 'react'
import {Trans, withNamespaces} from 'react-i18next'
import styles from './Intro.module.css'

import profile from '../../../assets/images/photos/me.jpg'
import profile2x from '../../../assets/images/photos/me@2x.jpg'
import profile3x from '../../../assets/images/photos/me@3x.jpg'
import profile4x from '../../../assets/images/photos/me@4x.jpg'

const Intro = ({t}: any) => {
  return (
    <section className={`section ${styles['section-intro']}`}>
      <div className="section-content">
        <header className={styles.header}>
          <img 
            className={styles.picture} 
            src={profile}
            srcSet={`${profile2x} 2x,${profile3x} 3x, ${profile4x} 4x`}
            alt="Gabriel Lima" 
          />

          <h1 className={`${styles.heading} `}>
            <div className={styles.intro}>{t('intro.greeting')}</div>
            <div className={styles.name}>Gabriel Lima</div>
            <div className={styles.position}>{t('jobs.job.front-end-developer')}</div>
          </h1>
        </header>

        <div className={styles['bio-wrapper']}>
          <p className={styles['punch-line']}>
            <Trans i18nKey="intro.punch-line">I build things for the web and love what I do.</Trans>
          </p>
          <p className={styles.bio}>
            <Trans i18nKey="intro.bio">
              Mainly focused on
              <strong>Front-end Development</strong> with a good <strong>UI/UX</strong>
              eye and always trying different things. I speak <strong>JavaScript, CSS and HTML.</strong>
              and more.
            </Trans>
          </p>
        </div>
      </div>
    </section>
  )
}

export default withNamespaces()(Intro)
