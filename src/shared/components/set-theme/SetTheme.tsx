import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {settings} from '../../../settings'
import StorageService from '../../services/StorageService'

import styles from './SetTheme.module.css'
import {SetThemeEffect} from './services/SetThemeService'
import {SetThemeEnum} from './models/SetThemeEnum'
import * as actions from './redux/SetThemeActions'

const SetTheme = () => {
  const dispatch = useDispatch()
  const themeState = useSelector((state: any) => state.theme)
  const storageService = StorageService()

  const toggleTheme = () =>
    themeState.value === SetThemeEnum.light ? storeTheme(SetThemeEnum.dark) : storeTheme(SetThemeEnum.light)

  const storeTheme = (theme: string) => {
    const cond = theme === SetThemeEnum.dark ? SetThemeEnum.dark : SetThemeEnum.light

    storageService.setItem('theme', cond)
    dispatch(actions.setTheme(theme))
  }

  useEffect(() => {
    const savedTheme = storageService.getItem('theme')
    const preferColorScheme = SetThemeEffect.getPreferColorScheme()

    if (preferColorScheme && !savedTheme) {
      dispatch(actions.setTheme(preferColorScheme))
    } else if (savedTheme) {
      storeTheme(savedTheme)
    } else {
      storeTheme(SetThemeEnum.light)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    SetThemeEffect.isDarkTheme(themeState.value)
      ? document.body.classList.add(settings.theme.darkModeClassName)
      : document.body.classList.remove(settings.theme.darkModeClassName)
  }, [themeState.value])

  const getButtonLabel = (): string =>
    SetThemeEffect.isDarkTheme(themeState.value)
      ? `${SetThemeEnum.light.toUpperCase()} MODE`
      : `${SetThemeEnum.dark.toUpperCase()} MODE`

  return (
    <button
      className={`${styles.button} ${SetThemeEffect.isDarkTheme(themeState.value) ? styles['button-light'] : ''}`}
      onClick={toggleTheme}
    >
      {getButtonLabel()}
    </button>
  )
}

export default SetTheme
