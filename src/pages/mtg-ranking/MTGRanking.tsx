import React, {ChangeEvent, useEffect, useState, useCallback} from 'react'
import {withNamespaces} from 'react-i18next'
import styles from './MTGRanking.module.css'
import csaLogo from '../../assets/images/mtg-ranking/csa.png'
import resetIcon from '../../assets/images/mtg-ranking/reset.png'

import {MTGRankingPlayersModel} from './MTGRankingModel'
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

    const first = parseInt(player.ranking.first) * 3
    const second = parseInt(player.ranking.second) * 2
    const third = parseInt(player.ranking.third)
    const fourth = parseInt(player.ranking.fourth)
    const total = (first + second + third) - fourth

    return isNaN(total) ? '0' : total.toString()
  }, [mtgRanking])

  const sortRanking = useCallback((data) => {
    data
      .sort((a: any, b: any) => a.ranking.points - b.ranking.points)
      .reverse()
  }, [])

  const setRankingDefault = useCallback(() => {
    const ranking = MTGRankingData.map((player: MTGRankingDataModel) => ({
      name: player.name,
      avatar: player.avatar,
      ranking: {
        first: '0',
        second: '0',
        third: '0',
        fourth: '0',
        points: '0'
      }
    }))
    setMTGRanking(ranking)
    storageService.setItem('mtg-ranking', JSON.stringify(ranking))
  }, [])

  const fetchRanking = useCallback(() => {
    if (!savedMTGRanking || !savedMTGRanking.length) {
      setRankingDefault()
    } else {
      savedMTGRanking.forEach((player: MTGRankingPlayersModel) => {
        player.ranking.points = getTotalPoints(player.name)
      });
      sortRanking(mtgRanking)
    }
  }, [mtgRanking, savedMTGRanking, getTotalPoints, sortRanking, setRankingDefault])

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

    const ranking = mtgRanking.map((item: MTGRankingPlayersModel) => {
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

  const resetRanking = () => {
    storageService.clear('mtg-ranking')
    setRankingDefault()
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
            <th colSpan={2} className={styles.logo}>
              <img src={csaLogo} alt="Commander - CSA"/>
              <button className={styles.reset} onClick={resetRanking}>
                <img src={resetIcon} alt="Reset"/>
              </button>
            </th>
            <th>Primeiro</th>
            <th>Segundo</th>
            <th>Terceiro</th>
            <th>Quarto</th>
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
