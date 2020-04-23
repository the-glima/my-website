import React, {useState, useEffect} from 'react'
import styles from './SetTheme.module.css'
import { SetThemeEffect } from './SetThemeEffect'
import { SetThemeEnum } from './SetThemeEnum'

const SetTheme = () => {
  const [theme, setTheme] = useState('')

  const saveTheme = (theme: string) => {
    SetThemeEffect.setTheme(theme)
    setTheme(theme)
  }

  const toggleTheme = () => {
    return theme === SetThemeEnum.light ? saveTheme(SetThemeEnum.dark) : saveTheme(SetThemeEnum.light)
  }

  useEffect(() => {
    const savedTheme = SetThemeEffect.getTheme()

    if (SetThemeEffect.hasDarkPreferColorScheme() && !savedTheme) {
      setTheme(SetThemeEnum.dark)
    } else if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme(SetThemeEnum.light)
    }

    SetThemeEffect.isDarkTheme(theme)
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode')
  }, [theme])

  return (
    <button
      className={`${styles.button} ${SetThemeEffect.isDarkTheme(theme) ? styles['button-light'] : ''}`}
      onClick={toggleTheme}
    >
      {SetThemeEffect.isDarkTheme(theme)
        ? `${SetThemeEnum.light.toUpperCase()} THEME`
        : `${SetThemeEnum.dark.toUpperCase()} THEME`}
    </button>
  )
}

export default SetTheme
