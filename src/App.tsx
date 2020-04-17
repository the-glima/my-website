import React from 'react'
import Intro from './components/intro/Intro'
import Social from './components/social/Social'
import Gists from './components/gists/Gists'
import Footer from './components/footer/Footer'
import Jobs from './components/jobs/Jobs'

function App() {
  return (
    <div className="wrapper">
      <Intro />
      <Social />
      <Jobs />
      <Gists />
      <Footer />
    </div>
  )
}

export default App
