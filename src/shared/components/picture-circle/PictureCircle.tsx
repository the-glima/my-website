import React, { useCallback, useState } from 'react'

import styles from './PictureCircle.module.css'
import { settings } from '../../../settings'

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
  const [active, setActive]: any = useState('')

  const onClickPicture = useCallback((event: any) => {
    // const element = event.currentTarget
    // const parent = element.parentNode
    
    // setActive('active')
    // setTimeout(() => {
    //   parent.removeChild(element);
    // }, 1000);
  }, [])

  const isActive = () => (active ? styles.active : '')

  return (
    <div 
      className={`${props.wrapperClassName} ${isActive()}`}
      onClick={(e: any) => onClickPicture(e)}
    >
      <div
        className={`${styles.circle} ${props.className}`}
      >
        <img 
          className={styles.picture}
          src={props.image?.src}
          alt={props.image?.alt}
          title={props.image?.title} />

      </div>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default PictureCircle
