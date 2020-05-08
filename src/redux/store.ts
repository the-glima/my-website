import {combineReducers, createStore} from 'redux'
import {IntroReducer} from '../components/containers/intro/IntroReducer'
import {GistsReducer} from '../components/containers/gists/GistsReducer'
import {LanguagesReducer} from '../components/shared/languages/LanguagesReducer'
import {SetThemeReducer} from '../components/shared/set-theme/SetThemeReducer'

const reducers = combineReducers({
  gists: GistsReducer,
  intro: IntroReducer,
  language: LanguagesReducer,
  theme: SetThemeReducer
})

export default createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
