export const settings = {
  github: {
    urlParams: {
      url: 'https://api.github.com/users',
      user: 'the-glima'
    }
  },
  gists: {
    title: 'A cool Gist about something',
    logo: 'GitHub',
    limit: 8
  },
  languages: {
    options: [
      {
        label: 'English',
        key: 'en',
        default: true
      },
      {
        label: 'Portuguese',
        key: 'pt-BR'
      },
      {
        label: 'Spanish',
        key: 'es'
      }
    ]
  },
  localStorage: {
    primaryColorKey: 'GABRIEL-LIMA:PRIMARY-COLOR',
    themeKey: 'GABRIEL-LIMA:THEME',
    gistsKey: 'GABRIEL-LIMA:GISTS',
    languageKey: 'i18nextLng'
  },
  social: {
    github: {
      url: 'https://github.com/the-glima'
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/gabriel--lima/'
    },
    spotify: {
      url: 'https://open.spotify.com/playlist/2nbyGPsu5UjhwzIwHkL1ZF?si=eLDVmJ8xSLOOA57mWuHDKQ'
    },
    twitter: {
      url: 'https://twitter.com/__glima'
    }
  },
  theme: {
    darkModeClassName: 'dark-mode'
  },
  loading: {
    delay: 1200,
    threshold: 0.3
  }
}
