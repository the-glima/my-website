import {GistsState} from './GistsReducer'

export enum ActionTypes {
  SetGists = '[SET] Gists'
}

export const setGists = (gists: GistsState) => ({
  type: ActionTypes.SetGists,
  payload: {gists}
})
