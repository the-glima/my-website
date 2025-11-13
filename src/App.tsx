import './styles'
import {Provider} from 'react-redux'
import React, { StrictMode } from 'react'
import store from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import * as serviceWorker from './serviceWorker'
import smoothscroll from 'smoothscroll-polyfill'
import './i18n'

import Home from './pages/home/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// Smooth Scroll behavior polyfill
// https://github.com/iamdustan/smoothscroll
smoothscroll.polyfill()
