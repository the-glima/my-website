import React from 'react'
import { Trans, withNamespaces } from 'react-i18next';
import styles from './Footer.module.css'
import Social from '../../shared/social/Social'
import Languages from '../../shared/languages/Languages'
import DarkMode from '../../shared/dark-mode/DarkMode'

const Footer = ({ t }: any) => {
  return (
    <footer className="section">
      <div className={`section-content ${styles.footer}`}>
        <div className={styles['top-wrapper']}>
          <Languages className={styles.languages} />
          <div className={styles.actions}>
            <Social props={{ className: styles.social }}/>
            <DarkMode />
          </div>
        </div>
        <div className={styles['bottom-wrapper']}>
          <p className={styles.copyright}>© 2020 Gabriel Lima - {t('footer.copyright')}</p>
          <p className={styles.quote}>
            <Trans i18nKey="footer.quote">
              <span>Made with a lot of </span>
              <span role="img" aria-label="Coffee">
                ☕
              </span>
              <span> during </span>
              <a className={styles['quote-link']} href="https://www.google.com/search?q=covid+19&rlz=1C1GCEA_enES841ES841&oq=covid+19&aqs=chrome..69i57j0l4j69i60l3.1589j0j4&sourceid=chrome&ie=UTF-8">
              a quarantine time
              </a>
            </Trans>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default withNamespaces()(Footer)
