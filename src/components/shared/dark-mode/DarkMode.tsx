import React, {useState, useEffect} from 'react'
import styles from './DarkMode.module.css'
import {DarkModeService} from './DarkModeService'

const DarkMode = () => {
  const [theme, setDarkMode]: any = useState(false)

  const toggle = () => {
    DarkModeService.setDarkMode(theme)
    setDarkMode((active: boolean) => !active)
  }

  useEffect(() => {
    const darkModeClass = 'dark-mode'

    const isDarkMode = DarkModeService.isDarkMode()

    isDarkMode ? document.body.classList.add(darkModeClass) : document.body.classList.remove(darkModeClass)
  })

  return (
    <button className={`${styles.button} ${theme ? styles['button-active'] : ''}`} onClick={toggle}>
      {theme ? 'LIGHT THEME' : 'DARK THEME'}
    </button>
  )
}

export default DarkMode
