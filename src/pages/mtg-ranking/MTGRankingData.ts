import felipeAvatar from '../../assets/images/mtg-ranking/felipe.jpeg'
import biaAvatar from '../../assets/images/mtg-ranking/bia.jpeg'
import gabrielAvatar from '../../assets/images/mtg-ranking/gabriel.jpeg'
import joaoAvatar from '../../assets/images/mtg-ranking/joao.jpeg'
import berbertAvatar from '../../assets/images/mtg-ranking/berbert.jpeg'

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
    name: 'Bia',
    avatar: biaAvatar
  },
  {
    name: 'Berbert',
    avatar: berbertAvatar
  }
]
