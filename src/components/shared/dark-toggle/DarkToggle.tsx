import React, {useState, useEffect} from 'react'
import styles from './DarkToggle.module.css'

const DarkToggle = (props: any) => {
  const [theme, setDarkMode]: any = useState(false)

  const toggleActive = () => {
    setDarkMode((active: boolean) => !active)
  }

  useEffect(() => {
    const darkModeClass = 'dark-mode'

    theme ? document.body.classList.add(darkModeClass) : document.body.classList.remove(darkModeClass)
  })

  return (
    <button className={`${props.className} ${styles.button}`} onClick={toggleActive}>
      {theme ? 'LIGHT THEME' : 'DARK THEME'}
    </button>
  )
}

export default DarkToggle
