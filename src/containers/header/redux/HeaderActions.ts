export enum ActionTypes {
  GET_PERSONALITY = 'GET_PERSONALITY',
  SET_PERSONALITY = 'SET_PERSONALITY'
}

export const getPersonality = () => ({
  type: ActionTypes.GET_PERSONALITY
})

export const setPersonality = (personality: any) => ({
  type: ActionTypes.SET_PERSONALITY,
  payload: {personality}
})
