import React from 'react'

import styles from './TechLogo.module.css'

interface Props {
  source: {
    name: string
    url: string
  }
  logoClassName?: string
}

const TechLogo = (props: Props) => {
  return (
    <img
      className={`${styles.logo} ${props.logoClassName || ''}`}
      src={props.source.url}
      alt={props.source.name}
      title={props.source.name}
    />
  )
}

export default TechLogo
