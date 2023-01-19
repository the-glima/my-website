import felipeAvatar from '../../assets/images/mtg-ranking/felipe.jpeg'
import biaAvatar from '../../assets/images/mtg-ranking/bia.jpeg'
import gabrielAvatar from '../../assets/images/mtg-ranking/gabriel.jpeg'
import joaoAvatar from '../../assets/images/mtg-ranking/joao.jpeg'
import berbertAvatar from '../../assets/images/mtg-ranking/berbert.jpeg'
import lopesAvatar from '../../assets/images/mtg-ranking/lopes.jpeg'

// Avatar 1 https://robohash.org/f6fc95deaf606f29021b9cce42162788?set=set3&bgset=&size=200x200
// Avatar 2 https://robohash.org/f6fc95deaf606f29021b9cce42162788?set=set2&bgset=&size=200x200
// Avatar 3 https://robohash.org/f6fc95deaf606f29021b9cce42162788?set=set1&bgset=&size=200x200

export interface MTGRankingDataModel {
  name: string
  avatar?: string
}

export const MTGRankingData: MTGRankingDataModel[] = [
  {
    name: 'João',
    avatar: joaoAvatar
  },
  {
    name: 'Gabriel',
    avatar: gabrielAvatar
  },
  {
    name: 'Felipe',
    avatar: felipeAvatar
  },
  {
    name: 'Lopes',
    avatar: lopesAvatar
  },
  {
    name: 'Bia',
    avatar: biaAvatar
  },
  {
    name: 'Berbert',
    avatar: berbertAvatar
  }
]

export interface MTGRankingSettingsModel {
  delay: number
  firstPoints: number
  secondPoints: number
  thirdPoints: number
  forthPoints: number
}

export const MTGRankingSettings: MTGRankingSettingsModel = {
  delay: 2000,
  firstPoints: 4,
  secondPoints: 3,
  thirdPoints: 2,
  forthPoints: 1
}