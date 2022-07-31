export interface MTGRankingPlayersModel {
  [x: string]: any
  name: string
  ranking: MTGRankingPlayerDataModel
  place: string
}

export interface MTGRankingPlayerDataModel {
  wins: string
  draws: string
  losses: string
  points: string
}
