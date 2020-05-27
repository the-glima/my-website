import {ActionTypes} from './HeaderActions'
import {HeaderData, HeaderModel} from '../HeaderData'

const introData = HeaderData()

interface HeaderState {
  data: HeaderModel
  isLoading: boolean
  hasError: boolean
}

const initialState: HeaderState = {
  data: introData[0],
  isLoading: false,
  hasError: false
}

export const HeaderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_PERSONALITY: {
      return {
        ...state,
        isLoading: true,
        hasError: false
      }
    }

    case ActionTypes.SET_PERSONALITY: {
      const {personality} = action.payload

      return {
        ...state,
        data: personality,
        isLoading: false,
        hasError: false
      }
    }

    default:
      return state
  }
}
