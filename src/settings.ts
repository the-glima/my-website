export const settings = {
  github: {
    urlParams: {
      url: 'https://api.github.com',
      user: 'the-glima',
      perPage: 60,
      gistTechLogosId: 'cba6af25cf3143ff16de5b4f4d06c87d'
    }
  },
  header: {
    animationDelay: 800
  },
  gists: {
    title: 'A cool Gist about something',
    logo: 'GitHub',
    limit: 10,
    regexWebsite: /#website$/,
    regexLogoDescription: /^\[(.*)\]/,
    regexLogoFilename: /^(\w+)-logo.svg/
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
