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

const handleImg = (props: Props) => 
  props.avatar ? props.avatar : 'https://gravatar.com/avatar/e83c877ee1c239f12407b483c106a352?s=150&d=robohash&r=x'

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
        <input type="number" min="0" step="1" onChange={e => props.updateFunction(e, props.name, 'first')} placeholder={props.getFunction(props.name, 'first')}/>
      </td>
      <td>
        <input type="number" min="0" step="1" onChange={e => props.updateFunction(e, props.name, 'second')} placeholder={props.getFunction(props.name, 'second')}/>
      </td>
      <td>
        <input type="number" min="0" step="1" onChange={e => props.updateFunction(e, props.name, 'third')} placeholder={props.getFunction(props.name, 'third')}/>
      </td>
      <td>
        <input type="number" min="0" step="1" onChange={e => props.updateFunction(e, props.name, 'fourth')} placeholder={props.getFunction(props.name, 'fourth')}/>
      </td>
      <td className={`${styles['points']}`}>{props.getFunction(props.name, 'points')}pts</td>
    </tr>
  )
}

export default Ranking
