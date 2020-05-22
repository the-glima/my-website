import {ActionTypes} from './GistsActions'
import {GistsData} from './GistsModel'

export interface GistsState {
  data: GistsData | null
}

const initialState: GistsState = {
  data: {
    date: Date.now(),
    collection: []
  } as GistsData | null
}

export const GistsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SetGists: {
      const {gists} = action.payload

      return {
        ...state,
        data: gists
      }
    }
    default:
      return state
  }
}
