import {useDispatch} from 'react-redux'

import {settings} from '../../../settings'
import * as actions from '../redux/GistsActions'
import {gistsService} from '../services/GistsService'

export const useFetchGists = () => {
  const dispatch = useDispatch()

  return async () => {
    dispatch(actions.fetchGistsInit())

    try {
      const gistData = await gistsService.fetchAndSave()

      setTimeout(() => {
        dispatch(actions.fetchGistsSuccess(gistData))
      }, settings.loading.delay)
    } catch (error) {
      dispatch(actions.fetchGistsFailure(error))
    }
  }
}
