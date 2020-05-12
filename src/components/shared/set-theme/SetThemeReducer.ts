import {ActionTypes} from './SetThemeActions'

const initialState = {
  value: null
}

export const SetThemeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SetTheme: {
      const {theme} = action.payload

      return {
        ...state,
        value: theme
      }
    }
    default:
      return state
  }
}
