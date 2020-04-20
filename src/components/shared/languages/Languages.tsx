import React, {useState} from 'react'
import styles from './Languages.module.css'
import {settings} from '../../settings'

const Languages = (props: any) => {
  const languages = Object.values(settings.languages.options)
  const getLanguage = () => Object.values(languages).find((item) => item.default)

  const [lang, setLang]: any = useState(getLanguage())
  
  const toggleClass = (language: string) => lang.name === language ? `${styles.active}` : ''

  return (
    <ul className={`${props.className} ${styles.list}`}>
      {languages.map((language: any, i: number) => (
        <li key={i} className={styles['list-item']}>
          <button className={`${styles.language} ${toggleClass(language.name)}`} onClick={() => setLang(language.name)}>{language.name}</button>
        </li>
      ))}
    </ul>
  )
} 

export default Languages
