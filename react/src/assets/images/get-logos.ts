import angularLogo from './logos/angular.svg'
import cssLogo from './logos/css.svg'
import dockerLogo from './logos/docker.svg'
import githubLogo from './logos/github.svg'
import htmlLogo from './logos/html.svg'
import javascriptLogo from './logos/javascript.svg'
import markdownLogo from './logos/markdown.svg'
import scssLogo from './logos/scss.svg'
import shellLogo from './logos/shell.svg'
import vscodeLogo from './logos/vscode.svg'

const logoDefault = { name: 'github', src: githubLogo }

const logos = [
  { name: 'angular', src: angularLogo },
  { name: 'css', src: cssLogo },
  { name: 'docker', src: dockerLogo },
  { name: 'html', src: htmlLogo },
  { name: 'javascript', src: javascriptLogo },
  { name: 'markdown', src: markdownLogo },
  { name: 'scss', src: scssLogo },
  { name: 'shell', src: shellLogo },
  { name: 'vscode', src: vscodeLogo },
];

export const logoLoader = (logoName: string) => {
  const logo = Object.values(logos).find(item => item.name === logoName)

  return logo ? logo : logoDefault
}
