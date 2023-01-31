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

export interface StackModel {
  name: string
  url: string
  logo: any
  title: string
}

export const StackData = (t: any): StackModel[] => [
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    logo: JavaScriptLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    logo: TypeScriptLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'React',
    url: 'https://reactjs.org',
    logo: ReactLogo,
    title: t('social.titles.linkedin')
  },
  {
    name: 'Angular',
    url: 'https://angular.io',
    logo: AngularLogo,
    title: t('social.titles.github')
  },
  {
    name: 'Jest',
    url: 'https://jestjs.io/pt-BR/',
    logo: JestLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'CSS',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    logo: CSSLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'HTML',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    logo: HTMLLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'NextJs',
    url: 'https://nextjs.org/',
    logo: NextLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'Tailwind',
    url: 'https://tailwindcss.com/',
    logo: TailwindLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'Storybook',
    url: 'https://storybook.js.org/',
    logo: StorybookLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com/',
    logo: DockerLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'Sass',
    url: 'https://sass-lang.com/',
    logo: SassLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'Vue',
    url: 'https://vuejs.org/',
    logo: VueLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'NodeJs',
    url: 'https://nodejs.org/en/',
    logo: NodeLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'Bash',
    url: 'https://www.gnu.org/software/bash/',
    logo: BashLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'RxJs',
    url: 'https://rxjs.dev/',
    logo: RxJsLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'Redux',
    url: 'https://redux.js.org/',
    logo: ReduxLogo,
    title: t('social.titles.spotify')
  }
]
