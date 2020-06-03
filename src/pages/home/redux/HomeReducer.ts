import {ActionTypes} from './HomeActions'

interface HomeState {
  isInitialized: boolean
}

const initialState: HomeState = {
  isInitialized: false
}

export const HomeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_HOME_INIT: {
      return {
        ...state,
        isInitialized: false
      }
    }

    case ActionTypes.SET_HOME_INIT: {
      return {
        ...state,
        isInitialized: true
      }
    }

    default:
      return state
  }
}
