import React, {ChangeEvent, useEffect, useState, useCallback} from 'react'
import {withNamespaces} from 'react-i18next'
import styles from './MTGRanking.module.css'
import csa from '../../assets/images/mtg-ranking/csa.png'

import {MTGRankingPlayersModel} from '../../shared/models/MTGRankingModel'
import {storageService} from '../../shared/services/StorageService'
import Ranking from './components/Ranking'
import {MTGRankingData, MTGRankingDataModel} from './MTGRankingData'

const MTGRanking = ({t}: any) => {
  const [fadeIntro, setFadeIntro]: any = useState(false)
  const [savedMTGRanking, mtgError] = storageService.getItem('mtg-ranking') as MTGRankingPlayersModel[]
  const [mtgRanking, setMTGRanking]: any = useState(savedMTGRanking)

  const getTotalPoints = useCallback((playerName: string): any => {
    if (!playerName || !mtgRanking) return

    const player = mtgRanking.find((player: MTGRankingPlayersModel) => 
      player.name === playerName)
    
    if (!player) return

    const wins = parseInt(player.ranking.wins) * 3
    const draws = parseInt(player.ranking.draws) 
    const losses = parseInt(player.ranking.losses)
    const total = (wins + draws) - losses

    return isNaN(total) ? '0' : total.toString()
  }, [mtgRanking])

  const sortRanking = useCallback((data) => {
    data
      .sort((a: any, b: any) => a.ranking.points - b.ranking.points)
      .reverse()
  }, [])

  const fetchRanking = useCallback(() => {
    let ranking = []

    if (mtgError) return

    if (!savedMTGRanking || !savedMTGRanking.length) {
      ranking = MTGRankingData.map((player: MTGRankingDataModel) => ({
        name: player.name,
        avatar: player.avatar,
        ranking: {
          wins: '0',
          draws: '0',
          losses: '0',
          points: '0'
        }
      }))
      setMTGRanking(ranking)
      storageService.setItem('mtg-ranking', JSON.stringify(ranking))
    } else {
      savedMTGRanking.forEach((player: MTGRankingPlayersModel) => {
        player.ranking.points = getTotalPoints(player.name)
      });
      sortRanking(mtgRanking)
    }
  }, [mtgRanking, savedMTGRanking, mtgError, getTotalPoints, sortRanking])

  const getRankingProp = useCallback((playerName: string, prop: string) => {
    if (!mtgRanking) return

    const player = mtgRanking.find((player: MTGRankingPlayersModel) => 
      player.name === playerName)

    if (!player) return

    return player.ranking[prop as keyof  MTGRankingPlayersModel]
  }, [mtgRanking])

  const updateRankingProp = (e: ChangeEvent, playerName: string, prop: string) => {
    if (!mtgRanking || !mtgRanking.length || !playerName || !prop) return

    const value = (e.target as HTMLInputElement).value 
      ? (e.target as HTMLInputElement).value
      : '0'

    const ranking = mtgRanking.map((item: any) => {
      if (item.name === playerName) { 
        item.ranking[prop] = value
        item.ranking.points = getTotalPoints(playerName)
      }

      return item
    })
    
    sortRanking(ranking)
    setTimeout(() => {
      setMTGRanking(ranking)
      storageService.setItem('mtg-ranking', JSON.stringify(ranking))
    }, 2000)
  }
  
  useEffect(() => {
    setTimeout(() => {
      setFadeIntro(true)
    })

    fetchRanking()
  })

  return (
    <div className={`${styles['mtg-ranking']} ${fadeIntro ? 'mtg-ranking-initialized' : ''}`}>
      <table>
        <thead>
          <tr>
            <th colSpan={2} className={`${styles.logo}`}><img src={csa} alt="Commander - CSA"/></th>
            <th>Vitória</th>
            <th>Empate</th>
            <th>Derrota</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {mtgRanking ? mtgRanking.map((player: MTGRankingDataModel, index: number) => (
            <Ranking
              name={player.name}
              avatar={player.avatar}
              updateFunction={updateRankingProp}
              getFunction={getRankingProp}
              key={player.name}
              place={index}
            />
          )) : ''}
        </tbody>
      </table>
    </div>
  )
}

export default withNamespaces()(MTGRanking)
