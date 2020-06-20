import {settings} from '../../../settings'

import {ReactComponent as LinkedinLogo} from '../../../assets/images/social/linkedin.svg'
import {ReactComponent as TwitterLogo} from '../../../assets/images/social/twitter.svg'
import {ReactComponent as GithubLogo} from '../../../assets/images/social/github.svg'
import {ReactComponent as SpotifyLogo} from '../../../assets/images/social/spotify.svg'

export interface SocialModel {
  name: string
  url: string
  logo: any
  title: string
}

export const SocialData = (t: any): SocialModel[] => [
  {
    name: 'GitHub',
    url: settings.social.github.url,
    logo: GithubLogo,
    title: t('social.titles.github')
  },
  {
    name: 'LinkedIn',
    url: settings.social.linkedin.url,
    logo: LinkedinLogo,
    title: t('social.titles.linkedin')
  },
  {
    name: 'Twitter',
    url: settings.social.twitter.url,
    logo: TwitterLogo,
    title: t('social.titles.twitter')
  },
  {
    name: 'Spotify',
    url: settings.social.spotify.url,
    logo: SpotifyLogo,
    title: t('social.titles.spotify')
  }
]
