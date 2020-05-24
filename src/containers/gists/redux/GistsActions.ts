export enum ActionTypes {
  FETCH_GISTS_INIT = 'FETCH_GISTS_INIT',
  FETCH_GISTS_SUCCESS = 'FETCH_GISTS_SUCCESS',
  FETCH_GISTS_FAILURE = 'FETCH_GISTS_FAILURE',
  FETCH_GISTS_LOCAL_STORAGE_SUCCESS = 'FETCH_GISTS_LOCAL_STORAGE_SUCCESS',
  FETCH_GISTS_LOCAL_STORAGE_FAILURE = 'FETCH_GISTS_LOCAL_STORAGE_FAILURE'
}

export const fetchGistsInit = () => ({
  type: ActionTypes.FETCH_GISTS_INIT
})

export const fetchGistsSuccess = (gistsCollection: any) => ({
  type: ActionTypes.FETCH_GISTS_SUCCESS,
  payload: {gistsCollection}
})

export const fetchGistsFailure = (error: Error) => ({
  type: ActionTypes.FETCH_GISTS_FAILURE,
  payload: {error}
})

export const fetchGistsLocalStorageSuccess = (gistsCollection: any) => ({
  type: ActionTypes.FETCH_GISTS_LOCAL_STORAGE_SUCCESS,
  payload: {gistsCollection}
})

export const fetchGistsLocalStorageFailure = (error: Error) => ({
  type: ActionTypes.FETCH_GISTS_LOCAL_STORAGE_FAILURE,
  payload: {error}
})
