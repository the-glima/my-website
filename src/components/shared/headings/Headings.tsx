import React from 'react'
import styles from './Headings.module.css'


const Headings = (props: any) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{props.title}</h2>
      <h3 className={styles.subtitle}>{props.subtitle}</h3>
    </header>
  )
}

export default Headings
