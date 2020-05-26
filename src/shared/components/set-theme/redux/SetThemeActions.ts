export enum ActionTypes {
  SetTheme = '[SET] Theme'
}

export const setTheme = (theme: any) => ({
  type: ActionTypes.SetTheme,
  payload: {theme}
})
