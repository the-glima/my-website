import React from 'react'
import styles from './GistsList.module.css'
import {GistDOMModel, GistTechLogoDOMModel} from '../models'
import TechLogo from 'shared/components/tech-logo/TechLogo'
import { GistTechLogosService } from '../services/GistTechLogosService'
import Message from './Message'

interface Props {
  collection: GistDOMModel[] | any
  logos: GistTechLogoDOMModel[] | any
  className?: string
  noGistsMessage?: string
}

const GistsList = (props: Props) => {
  return (
    <>
    {!props.collection?.length ? (
      <Message
        show={!props.collection?.length}
        message={props.noGistsMessage || ''}
      /> 
    ) : (
      <ul className={`${styles.list} ${props.className}`} data-testid="gists-list">
        {props.collection.map((gist: GistDOMModel, i: number) => (
          <li key={i} className={`${styles['list-item']}`} data-testid="gist-item">
            <TechLogo 
              logoClassName={styles['tech-logo']}
              source={GistTechLogosService.getTechLogo(props.logos, gist.language.toLowerCase())}
              />
            <a
              className={styles.link}
              href={gist.url}
              title={`${gist.language}: ${gist.title}`}
            >
              {gist.title}
            </a>
          </li>
        ))}
      </ul>
    )}
    </>
  )
}

export default GistsList
