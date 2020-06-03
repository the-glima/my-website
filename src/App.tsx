import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'

import Home from './pages/home/Home'

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
