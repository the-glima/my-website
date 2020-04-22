import React from 'react'
import Intro from './components/containers/intro/Intro'
import Gists from './components/containers/gists/Gists'
import Footer from './components/containers/footer/Footer'
import Jobs from './components/containers/jobs/Jobs'
import Repositories from './components/containers/repositories/Repositories'

function App () {
  return (
    <div>
      <Intro />
      <Repositories />
      <Jobs />
      <Gists />
      <Footer />
    </div>
  )
}

export default App
