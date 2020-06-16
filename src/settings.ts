const settings = {
  github: {
    urlParams: {
      url: 'https://api.github.com/users',
      user: 'the-glima',
      perPage: 60
    }
  },
  header: {
    animationDelay: 800
  },
  gists: {
    title: 'A cool Gist about something',
    logo: 'GitHub',
    limit: 10,
    regexWebsite: /#website/,
    regexLogo: /^\[(.*)\]/
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
        key: 'pt'
      },
      {
        label: 'Spanish',
        key: 'es'
      }
    ]
  },
  storage: {
    prefix: 'GABRIEL-LIMA',
    keys: {
      primaryColor: 'PRIMARY-COLOR',
      theme: 'THEME',
      gists: 'GISTS',
      intro: 'INTRO'
    }
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
    delay: 1500,
    threshold: 0.1
  }
}

const getStorageKey = (key: string): string => {
  const value: string = (settings.storage as any).keys[key]

  return `${settings.storage.prefix}:${value.toUpperCase()}`
}

export {settings, getStorageKey}
