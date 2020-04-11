import React from 'react';
import './Social.css';

import linkedin from '../../assets/images/logos/linkedin.svg';
import twitter from '../../assets/images/logos/twitter.svg';
import github from '../../assets/images/logos/github.svg';

function Social() {
  return (
    <section className="section section-social-links">
      <ul className="social-links-list">
        <li>
          <a className="social-link" href="https://www.linkedin.com/in/gabriel--lima/" title="Go to my LinkedIn Profile">
            <img src={linkedin} alt="Linkedin Logo" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a className="social-link" href="https://twitter.com/__glima" title="Go to my Twitter Profile">
            <img src={twitter} alt="Twitter Logo" />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a className="social-link" href="https://github.com/the-glima" title="Go to my GitHub Profile">
            <img src={github} alt="GitHub Logo" />
            <span>GitHub</span>
          </a>
        </li>
      </ul>  
    </section>
  );
}

export default Social;
