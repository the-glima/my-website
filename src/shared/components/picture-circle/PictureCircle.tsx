import React from 'react'

import styles from './PictureCircle.module.css'

interface Props {
  image: {
    src: string
    alt: string
    title: string
  }
  text: string
  wrapperClassName?: string
  className?: string
}

const PictureCircle = (props: Props) => {
  return (
    <div className={props.wrapperClassName}>
      <div className={`${styles.circle} ${props.className}`}>
        <img className={styles.picture} src={props.image?.src} alt={props.image?.alt} title={props.image?.title} />
      </div>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default PictureCircle
