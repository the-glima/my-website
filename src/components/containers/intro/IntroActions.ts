export enum ActionTypes {
  SetPersonality = '[SET] Personality'
}

export const setPersonality = (personality: any) => ({
  type: ActionTypes.SetPersonality,
  payload: {personality}
})
