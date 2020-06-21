import {useCallback} from 'react'
import {useDispatch} from 'react-redux'

import {gistsService} from '../services/GistsService'
import * as actions from '../redux/GistsActions'
import {settings} from '../../../settings'

export const useFetchGists = () => {
  const dispatch = useDispatch()

  return useCallback(async () => {
    dispatch(actions.fetchGistsInit())

    try {
      const gistsData = await gistsService.getGists()

      setTimeout(() => {
        gistsService.saveGists(gistsData)
        dispatch(actions.fetchGistsSuccess(gistsData))
      }, settings.loading.delay)
    } catch (error) {
      dispatch(actions.fetchGistsFailure(error))
    }
  }, [dispatch])
}
