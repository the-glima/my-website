import React, {useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {storageService} from '../../services/StorageService'

import styles from './Theme.module.css'
import {ThemeService} from './services/ThemeService'
import {ThemeEnum} from './models/ThemeEnum'
import * as actions from './redux/ThemeActions'

const Theme = () => {
  const dispatch = useDispatch()
  const themeState = useSelector((state: any) => state.theme)

  const toggleTheme = () =>
    themeState.value === ThemeEnum.light ? storeTheme(ThemeEnum.dark) : storeTheme(ThemeEnum.light)

  const storeTheme = useCallback((theme: string) => {
    const cond = theme === ThemeEnum.dark ? ThemeEnum.dark : ThemeEnum.light

    storageService.setItem('theme', cond)
    dispatch(actions.setTheme(theme))
  }, [dispatch])

  useEffect(() => {
    const [savedTheme] = storageService.getItem('theme', false)
    const preferColorScheme = ThemeService.getPreferColorScheme()

    if (preferColorScheme && !savedTheme) {
      dispatch(actions.setTheme(preferColorScheme))
    } else if (savedTheme) {
      storeTheme(savedTheme)
    } else {
      storeTheme(ThemeEnum.light)
    }
  }, [dispatch, storeTheme])

  useEffect(() => {
    ThemeService.isDarkTheme(themeState.value)
      ? document.body.classList.add(ThemeEnum.darkMode)
      : document.body.classList.remove(ThemeEnum.darkMode)
  }, [themeState.value])

  const getButtonLabel = (): string =>
    ThemeService.isDarkTheme(themeState.value)
      ? `${ThemeEnum.light.toUpperCase()} MODE`
      : `${ThemeEnum.dark.toUpperCase()} MODE`

  return (
    <button
      className={`${styles.button} ${ThemeService.isDarkTheme(themeState.value) ? styles['button-light'] : ''}`}
      onClick={toggleTheme}
    >
      {getButtonLabel()}
    </button>
  )
}

export default Theme
