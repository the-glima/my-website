import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {withNamespaces} from 'react-i18next'
import i18n from '../../../i18n'
import styles from './Languages.module.css'
import {setLanguage} from './redux/LanguagesActions'
import { LanguageData } from './LanguageData'

const Languages = (props: any) => {
  const dispatch = useDispatch()
  const {langKey} = useSelector((state: any) => state.language)
  const languagesOptions = Object.values(LanguageData.options)

  const changeLanguage = (langKey: string) => {
    i18n.changeLanguage(langKey)
    dispatch(setLanguage(langKey))
  }

  const hasLanguage = (langKeyOption: string, langKey: string) => {
    const regex = new RegExp(`^${langKeyOption}`, 'i')

    return regex.test(langKey)
  }

  return (
    <ul className={`${props.className} ${styles.list}`}>
      {languagesOptions.map((languageItem: any, i: number) => (
        <li key={i} className={styles['list-item']}>
          <button
            className={`${styles.language} ${hasLanguage(languageItem.key, langKey) ? `${styles.active}` : ''}`}
            onClick={() => changeLanguage(languageItem.key)}
          >
            {languageItem.label}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default withNamespaces()(Languages)
