import {useCallback} from 'react'
import {useDispatch} from 'react-redux'

import {gistsService} from '../services/GistsService'
import * as actions from '../redux/GistsActions'

export const useFetchGists = () => {
  const dispatch = useDispatch()

  return useCallback(async () => {
    dispatch(actions.fetchGistsInit())

    try {
      const gistsData = await gistsService.getGists()

      gistsService.saveGists(gistsData)
      dispatch(actions.fetchGistsSuccess(gistsData))
    } catch (error) {
      dispatch(actions.fetchGistsFailure(error))
    }
  }, [dispatch])
}
