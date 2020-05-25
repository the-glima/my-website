import {ActionTypes} from './IntroActions'
import {IntroData, IntroModel} from '../IntroData'

const introData = IntroData()

interface IntroState {
  data: IntroModel
  isLoading: boolean
  hasError: boolean
}

const initialState: IntroState = {
  data: introData[0],
  isLoading: false,
  hasError: false
}

export const IntroReducer = (state = initialState, action: any) => {
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
