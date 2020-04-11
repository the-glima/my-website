import React from 'react'
import Intro from './components/intro/Intro'
import Social from './components/social/Social'
import Gists from './components/gists/Gists'

function App() {
  return (
    <div className="wrapper">
      <Intro />
      <Social />
      <Gists />
    </div>
  );
}

export default App;
