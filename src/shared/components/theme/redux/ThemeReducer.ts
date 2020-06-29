import {ActionTypes} from './ThemeActions'

const initialState = {
  value: undefined
}

export const ThemeReducer = (state = initialState, action: any) => {
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
