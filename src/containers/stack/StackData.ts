import AngularLogo from '../../assets/images/stack/angular.svg?react'
import ReactLogo from '../../assets/images/stack/react.svg?react'
import CSSLogo from '../../assets/images/stack/css.svg?react'
import DockerLogo from '../../assets/images/stack/docker.svg?react'
import HTMLLogo from '../../assets/images/stack/html.svg?react'
import TailwindLogo from '../../assets/images/stack/tailwind.svg?react'
import JestLogo from '../../assets/images/stack/jest.svg?react'
import JavaScriptLogo from '../../assets/images/stack/javascript.svg?react'
import SassLogo from '../../assets/images/stack/sass.svg?react'
import VueLogo from '../../assets/images/stack/vue.svg?react'
import NextLogo from '../../assets/images/stack/next.svg?react'
import BashLogo from '../../assets/images/stack/bash.svg?react'
import StorybookLogo from '../../assets/images/stack/storybook.svg?react'
import ReduxLogo from '../../assets/images/stack/redux.svg?react'
import RxJsLogo from '../../assets/images/stack/rxjs.svg?react'
import TypeScriptLogo from '../../assets/images/stack/typescript.svg?react'
import NodeLogo from '../../assets/images/stack/node.svg?react'
import FigmaLogo from '../../assets/images/stack/figma.svg?react'
import BootstrapLogo from '../../assets/images/stack/bootstrap.svg?react'
import CypressLogo from '../../assets/images/stack/cypress.svg?react'

export interface StackModel {
  name: string
  url: string
  logo: any
}

export const StackData = (t: any): StackModel[] => [
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    logo: JavaScriptLogo
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org',
    logo: TypeScriptLogo
  },
  {
    name: 'ReactJs',
    url: 'https://reactjs.org',
    logo: ReactLogo
  },
  {
    name: 'NextJs',
    url: 'https://nextjs.org',
    logo: NextLogo
  },
  {
    name: 'Jest',
    url: 'https://jestjs.io/pt-BR',
    logo: JestLogo
  },
  {
    name: 'Storybook',
    url: 'https://storybook.js.org/',
    logo: StorybookLogo
  },
  {
    name: 'Cypress',
    url: 'https://www.cypress.io/',
    logo: CypressLogo
  },
  {
    name: 'Figma',
    url: 'https://www.figma.com',
    logo: FigmaLogo
  },
  {
    name: 'Tailwind',
    url: 'https://tailwindcss.com',
    logo: TailwindLogo
  },
  {
    name: 'Redux',
    url: 'https://redux.js.org',
    logo: ReduxLogo
  },
  {
    name: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    logo: CSSLogo
  },
  {
    name: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    logo: HTMLLogo
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com',
    logo: DockerLogo
  },
  {
    name: 'Sass',
    url: 'https://sass-lang.com',
    logo: SassLogo
  },
  {
    name: 'NodeJs',
    url: 'https://nodejs.org/en',
    logo: NodeLogo
  },
  {
    name: 'Angular',
    url: 'https://angular.io',
    logo: AngularLogo
  },
  {
    name: 'RxJs',
    url: 'https://rxjs.dev/',
    logo: RxJsLogo
  },
  {
    name: 'VueJs',
    url: 'https://vuejs.org',
    logo: VueLogo
  },
  {
    name: 'Bootstrap',
    url: 'https://getbootstrap.com',
    logo: BootstrapLogo
  },
  {
    name: 'Bash',
    url: 'https://www.gnu.org/software/bash/',
    logo: BashLogo
  }
]
