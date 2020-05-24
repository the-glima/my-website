import {ActionTypes} from './GistsActions'
import {GistsData} from '../models/GistsModelDOM'

export interface GistsState {
  data: GistsData | null
  isLoading: boolean
  hasError: boolean
}

const initialState: GistsState = {
  data: {
    date: Date.now(),
    collection: []
  } as GistsData | null,
  isLoading: false,
  hasError: false
}

export const GistsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_GISTS_INIT: {
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    }

    case ActionTypes.FETCH_GISTS_SUCCESS: {
      const {gistsCollection} = action.payload

      return {
        ...state,
        data: gistsCollection,
        isLoading: false,
        hasError: false
      }
    }

    case ActionTypes.FETCH_GISTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    }

    case ActionTypes.FETCH_GISTS_LOCAL_STORAGE_SUCCESS: {
      const {gistsCollection} = action.payload

      return {
        ...state,
        data: gistsCollection,
        isLoading: false,
        hasError: false
      }
    }

    case ActionTypes.FETCH_GISTS_LOCAL_STORAGE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    }

    default:
      return state
  }
}
