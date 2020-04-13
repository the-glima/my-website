import React from 'react'
import './Footer.css'

import {settings} from '../../settings'
import brazilFlag from '../../assets/images/flags/brazil.svg'
import irelandFlag from '../../assets/images/flags/ireland.svg'
import spainFlag from '../../assets/images/flags/spain.svg'

const Footer = () => {
  return (
    <footer className="flex">
      <p>
        © 2020 Gabriel Lima - From
        <a href={settings.footer.links.brazil} title="Brazil">
          <img src={brazilFlag} alt="Brazil's flag" />
        </a>{' '}
        then
        <a href={settings.footer.links.ireland} title="Ireland">
          <img src={irelandFlag} alt="Ireland's flag" />
        </a>{' '}
        currently
        <a href={settings.footer.links.spain} title="Spain">
          <img src={spainFlag} alt="Spain's flag" />
        </a>
      </p>
    </footer>
  )
}

export default Footer
