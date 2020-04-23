export const settings = {
  github: {
    urlParams: {
      url: 'https://api.github.com/users',
      user: 'the-glima',
      limit: '8'
    }
  },
  gist: {
    title: 'A cool Gist about something',
    languageImgPath: 'assets/images/logos/github.svg',
    logo: 'GitHub'
  },
  intro: {
    positionOptions: [
      {
        title: 'Front-End Developer',
        default: true
      },
      {title: 'Front-End Engineer'},
      {title: 'JavaScript Engineer'},
      {title: 'JavaScript Developer'},
      {title: 'Software Developer'},
      {title: 'Software Engineer'},
      {title: 'Infrastructure Developer'},
      {title: 'Web Designer'},
      {title: 'UI Developer'},
      {title: 'JS-Framework Developer'},
      {
        title: '10x Engineer',
        jsxCss: {
          textDecoration: 'line-through'
        }
      }
    ]
  },
  languages: {
    options: [
      {
        label: 'English',
        key: 'en'
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
  footer: {
    links: {
      brazil:
        'https://www.google.com/search?q=p%C3%A3o+de+queijo&rlz=1C1GCEA_enES841ES841&oq=p%C3%A3o+de+quu&aqs=chrome.1.69i57j0l7.8238j0j7&sourceid=chrome&ie=UTF-8',
      ireland:
        'https://www.google.com/search?rlz=1C1GCEA_enES841ES841&ei=l0RkXs7RLJbolwSHlJmYCw&q=guiness+pint&oq=guiness+pint&gs_l=psy-ab.3..0i10l10.113793.114999..115186...0.0..0.141.1332.7j6......0....1..gws-wiz.......0i7i30j0j0i67.cx-4hy65v7I&ved=0ahUKEwiO-ZC914noAhUW9IUKHQdKBrMQ4dUDCAs&uact=5',
      spain:
        'https://www.google.com/search?rlz=1C1GCEA_enES841ES841&ei=DEVkXtyZDMm4aZqAu5AG&q=j%C3%A1mon+iberico&oq=j%C3%A1mon+&gs_l=psy-ab.3.0.0j0i30l4j0i5i30j0i30l3j0i5i30.25040.26774..28635...0.0..0.121.646.1j5......0....1..gws-wiz.......0i273.Wk5_W6D8jGA'
    }
  },
  localStorage: {
    themeKey: 'GABRIEL-LIMA:THEME',
    languageKey: 'i18nextLng'
  }
}
