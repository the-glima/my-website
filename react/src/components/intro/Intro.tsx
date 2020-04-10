import React from 'react';
import './Intro.css';

// import {settings} from '../../config/settings';

import profile from '../../assets/images/me.jpg';
import profile2x from '../../assets/images/me@2x.jpg';
import profile3x from '../../assets/images/me@3x.jpg';
import profile4x from '../../assets/images/me@4x.jpg';

function Intro() {
  return (
    <section className="section section-intro">
      <header>
        <div className="picture-wrapper">
          <img className="picture" src={profile} srcSet={`${profile2x} 2x,${profile3x} 3x, ${profile4x} 4x`}alt="Gabriel Lima" />
        </div>
        <h1>Gabriel Lima</h1>
        <h2 id="subtitle">Front-End Developer</h2>
      </header>

      <p className="bio">Working in web development for almost 8 years with solid experience developing web applications, creating rich UI components, building RESTful APIs and improving development workflow (CI/CD and product infrastructure). Always learning and keeping track of modern technologies and new standards.</p>
    </section>
  );
}

export default Intro;



// export const IntroComponent = {
//   render: () => {
//     const subTitle = document.getElementById('subtitle');
//     const subTitleOptions = settings.subTitleOptions;

//     const randomness = Math.floor(Math.random() * subTitleOptions.length);

//     subTitle ? (subTitle.textContent = subTitleOptions[randomness]) : subTitleOptions[0];
//   }
// };


