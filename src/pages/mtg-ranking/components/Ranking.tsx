import React from 'react'
import styles from './Ranking.module.css'

import {ReactComponent as TrophyIcon} from '../../../assets/images/mtg-ranking/trophy-icon.svg'

interface Props {
  name: string
  avatar?: string
  updateFunction: Function
  getFunction: Function
  place: number
}

const handleImg = (props: Props) => {
  console.log(props);
  return props.avatar ? props.avatar : 'https://gravatar.com/avatar/e83c877ee1c239f12407b483c106a352?s=150&d=robohash&r=x'
}

const Ranking = (props: Props) => {
  return (
    <tr id={props.name} className={`${styles.row} ${props.place === 0 ? styles.featured : ''}`}>
      {props.place === 0
        ? <td className={`${styles['trophy-icon']}`}><TrophyIcon /></td>
        : <td></td>
      }
      <td className={`${styles.player}`}>
        <img src={ handleImg(props) } alt={props.name} />
        <h3>{props.name}</h3>
      </td>
      <td>
        <span className={`${styles['ranking-icon']}`} role="img" aria-label="Thumbs up">👍</span>
        <input type="number" min="0" step="1" onChange={e => props.updateFunction(e, props.name, 'wins')} placeholder={props.getFunction(props.name, 'wins')}/>
      </td>
      <td>
        <span className={`${styles['ranking-icon']}`} role="img" aria-label="Thumbs down">👎</span>
        <input type="number" min="0" step="1" onChange={e => props.updateFunction(e, props.name, 'draws')} placeholder={props.getFunction(props.name, 'draws')}/>
      </td>
      <td>
      <span className={`${styles['ranking-icon']}`} role="img" aria-label="Person shrugging">🤷</span>
        <input type="number" min="0" step="1" onChange={e => props.updateFunction(e, props.name, 'losses')} placeholder={props.getFunction(props.name, 'losses')}/>
      </td>
      <td className={`${styles['points']}`}>{props.getFunction(props.name, 'points')}pts</td>
    </tr>
  )
}

export default Ranking
