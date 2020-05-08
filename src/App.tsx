import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import Intro from './components/containers/intro/Intro'
import Gists from './components/containers/gists/Gists'
import Footer from './components/containers/footer/Footer'
import Work from './components/containers/work/Work'
import Repositories from './components/containers/repositories/Repositories'


function App() {
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
