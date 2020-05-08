import {ActionTypes} from './IntroActions'
import {IntroModel} from './IntroData'

interface IntroState {
  data: {[key: string]: IntroModel}
}

const initialState: IntroState = {
  data: {}
}

export const IntroReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SetPersonality: {
      const {personality} = action.payload

      return {
        ...state,
        data: personality
      }
    }
    default:
      return state
  }
}
