import React from 'react'
import Intro from './components/containers/intro/Intro'
import Social from './components/containers/social/Social'
import Gists from './components/containers/gists/Gists'
import Footer from './components/containers/footer/Footer'
import Jobs from './components/containers/jobs/Jobs'
import Repositories from './components/containers/repositories/Repositories'

function App() {
  return (
    <div className="wrapper">
      <Intro />
      <Social />
      <Repositories />
      <Jobs />
      <Gists />
      <Footer />
    </div>
  )
}

export default App
