import React, {useState} from 'react'
import i18n from '../../../i18n'
import styles from './Languages.module.css'
import {settings} from '../../settings'

const Languages = (props: any) => {
  const languagesOptions = Object.values(settings.languages.options)
  const [language, setLanguage]: any = useState(i18n.language)

  const changeLanguage = (langKey: string) => {
    i18n.changeLanguage(langKey)
    return setLanguage(langKey)
  }

  return (
    <ul className={`${props.className} ${styles.list}`}>
      {languagesOptions.map((languageItem: any, i: number) => (
        <li key={i} className={styles['list-item']}>
          <button
            className={`${styles.language} ${language === languageItem.key ? `${styles.active}` : ''}`}
            onClick={() => changeLanguage(languageItem.key)}
          >
            {languageItem.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Languages
