export enum ActionTypes {
  GET_HOME_INIT = 'GET_HOME_INIT',
  SET_HOME_INIT = 'SET_HOME_INIT'
}

export const getHomeInit = () => ({
  type: ActionTypes.GET_HOME_INIT
})

export const setHomeInit = (state: any) => ({
  type: ActionTypes.SET_HOME_INIT,
  payload: {state}
})
