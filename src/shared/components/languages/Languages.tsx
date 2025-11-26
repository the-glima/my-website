import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { withTranslation } from 'react-i18next'
import i18n from '@src/i18n'
import styles from './Languages.module.css'
import {setLanguage} from './redux/LanguagesActions'
import { ILanguage, LanguageData } from './LanguageData'
import { storageService } from '../../services/StorageService'

const Languages = (props: any) => {
  const dispatch = useDispatch()
  const {langKey} = useSelector((state: any) => state.language)
  const languagesOptions = Object.values(LanguageData)

  const changeLanguage = (langKey: string) => {
    i18n.changeLanguage(langKey)
    dispatch(setLanguage(langKey))
    storageService.setItem('language', langKey);
  }

  const hasLanguage = (langKeyOption: string, langKey: string) => {
    const regex = new RegExp(`^${langKeyOption}`, 'i')

    return regex.test(langKey)
  }

  const initLanguage = () => {
    const browserLanguages = navigator.languages;
    const [savedLanguage] = storageService.getItem('language', false)

    if (savedLanguage) return;

    if (!savedLanguage && browserLanguages.length) {
      const browserLanguage = browserLanguages[0] as ILanguage['key'];
      changeLanguage(browserLanguage);
      storageService.setItem('language', browserLanguage);
    }
  }

  useEffect(() => {
    initLanguage();
  }, [])

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

export default withTranslation()(Languages)
