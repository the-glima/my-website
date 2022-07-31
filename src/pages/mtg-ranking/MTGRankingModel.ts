export interface MTGRankingPlayersModel {
  [x: string]: any
  name: string
  ranking: MTGRankingPlayerDataModel
}

export interface MTGRankingPlayerDataModel {
  [x: string]: any
  first: string
  second: string
  third: string
  forth: string
  fifth?: string
  points: string
}
