import React, {useState, useEffect} from 'react'
import {Trans, withTranslation} from 'react-i18next'
import styles from './Footer.module.css'

import Social from '@shared/components/social/Social'
import Languages from '@shared/components/languages/Languages'
import Theme from '@shared/components/theme/Theme'
import ScrollUp from '@shared/components/scroll-up/ScrollUp'

import { version } from '../../../package.json'

const Footer = ({t}: any) => {
  const [year, setYear]: any = useState(0)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [year])

  return (
    <footer className={`section ${styles['footer-section']}`}>
      <div className={`section-content ${styles.footer}`}>
        <div className={styles['top-wrapper']}>
          <Languages className={styles.languages} />
          <div className={styles.actions}>
            <Social className={styles.social} />
            <Theme />
            <ScrollUp />
          </div>
        </div>
        <div className={styles['bottom-wrapper']}>
          <p className={styles.copyright}>
            <span>© {year} Gabriel Lima - {t('footer.copyright')} - {t('footer.version')}</span>
            <span> {version}</span>
          </p>
          <p className={styles.quote}>
            <Trans i18nKey="footer.quote">
              <span>Made during the </span>
              <a
                className={styles['quote-link']}
                href="https://www.google.com/search?q=covid+19+march+in+2020+spain&rlz=1C1GCEA_enES841ES841&ei=7w1mYIilBsG45OUP4uWMyAk&oq=covid+19+march+in+2020+spain&gs_lcp=Cgdnd3Mtd2l6EAM6CQgAELADEAgQHjoGCAAQFhAeOggIIRAWEB0QHjoHCCEQChCgAVCYC1jbE2CrFWgCcAB4AIAB5wGIAf4LkgEFMC43LjGYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=gws-wiz&ved=0ahUKEwjI2PbQ093vAhVBHLkGHeIyA5kQ4dUDCA0&uact=5"
              >
                COVID-19's quarantine.
              </a>
            </Trans>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default withTranslation()(Footer)
