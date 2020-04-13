import React from 'react'
import Intro from './components/intro/Intro'
import Social from './components/social/Social'
import Gists from './components/gists/Gists'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="wrapper">
      <Intro />
      <Social />
      <Gists />
      <Footer />
    </div>
  )
}

export default App
