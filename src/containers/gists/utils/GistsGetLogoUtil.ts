import angularLogo from '../../../assets/images/logos/angular.svg'
import cssLogo from '../../../assets/images/logos/css.svg'
import dockerLogo from '../../../assets/images/logos/docker.svg'
import githubLogo from '../../../assets/images/logos/github.svg'
import htmlLogo from '../../../assets/images/logos/html.svg'
import javascriptLogo from '../../../assets/images/logos/javascript.svg'
import markdownLogo from '../../../assets/images/logos/markdown.svg'
import scssLogo from '../../../assets/images/logos/scss.svg'
import shellLogo from '../../../assets/images/logos/shell.svg'
import vscodeLogo from '../../../assets/images/logos/vscode.svg'

const logoDefault = {name: 'github', src: githubLogo}

const logos = [
  {name: 'angular', src: angularLogo},
  {name: 'css', src: cssLogo},
  {name: 'docker', src: dockerLogo},
  {name: 'html', src: htmlLogo},
  {name: 'javascript', src: javascriptLogo},
  {name: 'markdown', src: markdownLogo},
  {name: 'scss', src: scssLogo},
  {name: 'shell', src: shellLogo},
  {name: 'vscode', src: vscodeLogo}
]

export const GistsGetLogoUtil = (logoName: string) => {
  const logo = Object.values(logos).find((item) => item.name === logoName)

  return logo ? logo : logoDefault
}
