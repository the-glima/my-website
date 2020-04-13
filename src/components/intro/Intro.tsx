import React from 'react'
import './Intro.css'

import {settings} from '../../settings'
import profile from '../../assets/images/photos/me.jpg'
import profile2x from '../../assets/images/photos/me@2x.jpg'
import profile3x from '../../assets/images/photos/me@3x.jpg'
import profile4x from '../../assets/images/photos/me@4x.jpg'

const Intro = () => {
  const randomizeSubTitle = (): string => {
    const subTitleOptions = settings.intro.subTitleOptions
    const randomness = Math.floor(Math.random() * subTitleOptions.length)

    return subTitleOptions[randomness] || subTitleOptions[0]
  }

  return (
    <section className="section section-intro">
      <header>
        <div className="picture-wrapper">
          <img
            className="picture"
            src={profile}
            srcSet={`${profile2x} 2x,${profile3x} 3x, ${profile4x} 4x`}
            alt="Gabriel Lima"
          />
        </div>
        <h1>Gabriel Lima</h1>
        <h2 id="subtitle">{randomizeSubTitle()}</h2>
      </header>

      <p className="bio">{settings.intro.bio}</p>
    </section>
  )
}

export default Intro
