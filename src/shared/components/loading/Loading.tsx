import React from 'react'

import styles from './Loading.module.css'

interface Props {
  className: string
  text: string
  image?: any
}

const Loading = (props: Props) => {
  return (
    <div className={`${styles['loading-wrapper']} ${props.className}`}>
      <div>
        {props.image && <props.image />}
        {props.text && <p className={styles.loading}>{props?.text}</p>}
      </div>
    </div>
  )
}

export default Loading
