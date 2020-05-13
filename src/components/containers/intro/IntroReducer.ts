import {ActionTypes} from './IntroActions'
import {IntroData, IntroModel} from './IntroData'

const introData = IntroData()

interface IntroState {
  data: IntroModel
}

const initialState: IntroState = {
  data: introData[0]
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
