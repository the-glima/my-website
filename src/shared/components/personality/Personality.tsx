import React from 'react'

import styles from './Personality.module.css'

interface Props {
  wrapperClassName?: string
  className?: string
  spinning?: boolean
  active?: boolean
  text?: string
  events?: {
    onClick: any
  }
  image: {
    src: string
    alt: string
  }
}

const Personality = (props: Props) => {
  return (
    <div className={`${styles.wrapper} ${props.wrapperClassName || ''}`}>
      <div
        className={`
          ${styles.circle}
          ${props.spinning ? styles.spinning : ''}
          ${props.active ? styles.active : ''}
          ${props.className || ''}
        `}
        onClick={props.events?.onClick}
      >
        <img
          className={styles.picture}
          src={props.image?.src}
          alt={props.image?.alt}
        />
      </div>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default Personality
