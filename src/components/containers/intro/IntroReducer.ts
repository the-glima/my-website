import {ActionTypes} from './IntroActions'

const initialState = {
  personality: {}
}

export const IntroReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SetPersonality: {
      const {personality} = action.payload

      return {
        ...state,
        personality
      }
    }
    default:
      return state
  }
}
