export enum ActionTypes {
  SetLanguage = '[SET] Language'
}

export const setLanguage = (language: any) => ({
  type: ActionTypes.SetLanguage,
  payload: {language}
})
