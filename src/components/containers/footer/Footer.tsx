import React from 'react'
import styles from './Footer.module.css'
import Social from '../../shared/social/Social'
import Languages from '../../shared/languages/Languages'
import DarkToggle from '../../shared/dark-toggle/DarkToggle'

const Footer = (props: any) => {
  return (
    <footer className="section">
      <div className={`section-content ${styles.footer}`}>
        <div className={styles['top-wrapper']}>
          <Languages className={styles.languages} />
          <div className={styles.actions}>
            <Social className={styles.social} />
            <DarkToggle />
          </div>
        </div>
        <div className={styles['bottom-wrapper']}>
          <p className={styles.copyright}>© 2020 Gabriel Lima - All Rights Reserved</p>
          <p className={styles.covid19}>
            Made with a lot of{' '}
            <span role="img" aria-label="Coffee">
              ☕
            </span>{' '}
            during a{' '}
            <a href="https://www.google.com/search?q=covid+19&rlz=1C1GCEA_enES841ES841&oq=covid+19&aqs=chrome..69i57j0l4j69i60l3.1589j0j4&sourceid=chrome&ie=UTF-8">
              quarantine time
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
