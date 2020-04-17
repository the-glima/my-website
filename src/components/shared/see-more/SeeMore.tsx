import React from 'react'
import styles from './SeeMore.module.css'

const SeeMore = (props: any) => {
  return (
    <div className="text-center">
      <a className={styles['section-link']} href={props.url}>
        {props.text || 'See More'}
      </a>
    </div>
  )
}

export default SeeMore
