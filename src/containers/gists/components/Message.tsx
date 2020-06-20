import React from 'react'
import styles from './Message.module.css'

interface Props {
  show: boolean
  message: string
  className?: string
}

const Message = (props: Props) => {
  return (
    <>
      {props.show && (
        <p className={`${styles.message} ${styles.className}`}>
          <span role="img" aria-label="Confused Face">
            😕
          </span>{' '}
          {props.message}
        </p>
      )}
    </>
  )
}

export default Message
