import {combineReducers, createStore} from 'redux'
import {IntroReducer} from '../containers/intro/IntroReducer'
import {GistsReducer} from '../containers/gists/GistsReducer'
import {LanguagesReducer} from '../shared/components/languages/LanguagesReducer'
import {SetThemeReducer} from '../shared/components/set-theme/SetThemeReducer'

const reducers = combineReducers({
  gists: GistsReducer,
  personality: IntroReducer,
  language: LanguagesReducer,
  theme: SetThemeReducer
})

export default createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
