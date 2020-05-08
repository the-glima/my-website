import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styles from './SetTheme.module.css'
import {SetThemeEffect} from './SetThemeEffect'
import {SetThemeEnum} from './SetThemeEnum'
import * as actions from './SetThemeActions'
import { settings } from '../../settings'

const SetTheme = () => {
  const dispatch = useDispatch()
  const themeState = useSelector((state: any) => state.theme)

  const saveTheme = (theme: string) => {
    SetThemeEffect.setTheme(theme)
    dispatch(actions.setTheme(theme))
  }

  const toggleTheme = () =>
    themeState.value === SetThemeEnum.light ? saveTheme(SetThemeEnum.dark) : saveTheme(SetThemeEnum.light)

  useEffect(() => {
    const savedTheme = SetThemeEffect.getTheme()
    const preferColorScheme = SetThemeEffect.getPreferColorScheme()

    if (preferColorScheme && !savedTheme) {
      dispatch(actions.setTheme(preferColorScheme))
    } else if (savedTheme) {
      saveTheme(savedTheme)
    } else {
      saveTheme(SetThemeEnum.light)
    }
  }, [])

  useEffect(() => {
    SetThemeEffect.isDarkTheme(themeState.value)
      ? document.body.classList.add(settings.theme.darkModeClassName)
      : document.body.classList.remove(settings.theme.darkModeClassName)
  }, [themeState.value])

  return (
    <button
      className={`${styles.button} ${SetThemeEffect.isDarkTheme(themeState.value) ? styles['button-light'] : ''}`}
      onClick={toggleTheme}
    >
      {SetThemeEffect.isDarkTheme(themeState.value)
        ? `${SetThemeEnum.light.toUpperCase()} THEME`
        : `${SetThemeEnum.dark.toUpperCase()} THEME`}
    </button>
  )
}

export default SetTheme
