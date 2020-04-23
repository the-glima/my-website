import React, {useState, useEffect} from 'react'
import styles from './DarkMode.module.css'
import {DarkModeService} from './DarkModeService'
import {DarkModeEnum} from './DarkModeEnum'

const DarkMode = () => {
  const [theme, setTheme] = useState('')

  const saveTheme = (theme: string) => {
    DarkModeService.setTheme(theme)
    setTheme(theme)
  }

  const toggleTheme = () => {
    return theme === DarkModeEnum.light ? saveTheme(DarkModeEnum.dark) : saveTheme(DarkModeEnum.light)
  }

  useEffect(() => {
    const savedTheme = DarkModeService.getTheme()

    if (DarkModeService.hasDarkPreferColorScheme() && !savedTheme) {
      setTheme(DarkModeEnum.dark)
    } else if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme(DarkModeEnum.light)
    }

    DarkModeService.isDarkMode(theme)
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode')
  }, [theme])

  return (
    <button
      className={`${styles.button} ${DarkModeService.isDarkMode(theme) ? styles['button-light'] : ''}`}
      onClick={toggleTheme}
    >
      {DarkModeService.isDarkMode(theme)
        ? `${DarkModeEnum.light.toUpperCase()} THEME`
        : `${DarkModeEnum.dark.toUpperCase()} THEME`}
    </button>
  )
}

export default DarkMode
