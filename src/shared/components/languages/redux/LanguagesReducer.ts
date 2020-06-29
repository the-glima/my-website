import {ActionTypes} from './LanguagesActions'
import i18n from '../../../../i18n'

const initialState = {
  langKey: i18n.language
}

export const LanguagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SetLanguage: {
      const {language} = action.payload

      return {
        ...state,
        langKey: language
      }
    }
    default:
      return state
  }
}
