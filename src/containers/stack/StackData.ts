import {ReactComponent as AngularLogo} from '../../assets/images/stack/angular.svg'
import {ReactComponent as ReactLogo} from '../../assets/images/stack/react.svg'
import {ReactComponent as CSSLogo} from '../../assets/images/stack/css.svg'
import {ReactComponent as DockerLogo} from '../../assets/images/stack/docker.svg'
import {ReactComponent as HTMLLogo} from '../../assets/images/stack/html.svg'
import {ReactComponent as TailwindLogo} from '../../assets/images/stack/tailwind.svg'
import {ReactComponent as JestLogo} from '../../assets/images/stack/jest.svg'
import {ReactComponent as JavaScriptLogo} from '../../assets/images/stack/javascript.svg'
import {ReactComponent as SassLogo} from '../../assets/images/stack/sass.svg'
import {ReactComponent as VueLogo} from '../../assets/images/stack/vue.svg'
import {ReactComponent as NextLogo} from '../../assets/images/stack/next.svg'
import {ReactComponent as BashLogo} from '../../assets/images/stack/bash.svg'
import {ReactComponent as StorybookLogo} from '../../assets/images/stack/storybook.svg'
import {ReactComponent as ReduxLogo} from '../../assets/images/stack/redux.svg'
import {ReactComponent as RxJsLogo} from '../../assets/images/stack/rxjs.svg'
import {ReactComponent as TypeScriptLogo} from '../../assets/images/stack/typescript.svg'
import {ReactComponent as NodeLogo} from '../../assets/images/stack/node.svg'
import {ReactComponent as FigmaLogo} from '../../assets/images/stack/figma.svg'
import {ReactComponent as BootstrapLogo} from '../../assets/images/stack/bootstrap.svg'
import {ReactComponent as CypressLogo} from '../../assets/images/stack/cypress.svg'

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
