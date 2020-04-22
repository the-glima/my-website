import React, {useState} from 'react'
import i18n from '../../../i18n'
import styles from './Languages.module.css'
import {settings} from '../../settings'

const Languages = (props: any) => {
  const languages = Object.values(settings.languages.options)
  const getLanguage = languages.find((item) => item.default)

  const [lang, setLang]: any = useState(getLanguage)

  const changeLanguage = (langKey: string) => {
    i18n.changeLanguage(langKey)
    return setLang(langKey)
  }

  return (
    <ul className={`${props.className} ${styles.list}`}>
      {languages.map((language: any, i: number) => (
        <li key={i} className={styles['list-item']}>
          <button 
            className={`${styles.language} ${lang.key === language.key ? `${styles.active}` : ''}`} 
            onClick={() => changeLanguage(language.key)}>
            {language.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Languages
