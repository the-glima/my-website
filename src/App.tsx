import React from 'react'
import {Provider, useSelector} from 'react-redux'
import store from './redux/store'

import Intro from './containers/intro/Intro'
import Gists from './containers/gists/Gists'
import Footer from './containers/footer/Footer'
import Work from './containers/work/Work'
import Repositories from './containers/repositories/Repositories'

function App() {
  // const gistsState: GistsState = useSelector((state: any) => state.gists)

  return (
    <Provider store={store}>
      <Intro />
      <Repositories />
      <Work />
      <Gists />
      <Footer />
    </Provider>
  )
}

export default App
