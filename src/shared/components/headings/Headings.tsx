import React from 'react'
import styles from './Headings.module.css'

const Headings = (props: any) => {
  const trim = (str: string): string => str.split(' ').join('-').toLowerCase()

  return (
    <header className={styles.header}>
      <h2 id={trim(props.title)} className={styles.title}>
        <a className={styles.anchor} href={`#${trim(props.title)}`}>
          {props.title}
        </a>
      </h2>
      <h3 className={styles.subtitle}>{props.subtitle}</h3>
    </header>
  )
}

export default Headings
