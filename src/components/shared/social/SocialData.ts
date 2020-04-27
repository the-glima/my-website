import {settings} from '../../settings'

import linkedin from '../../../assets/images/logos/linkedin.svg'
import twitter from '../../../assets/images/logos/twitter.svg'
import github from '../../../assets/images/logos/github.svg'
import spotify from '../../../assets/images/logos/spotify.svg'

export interface SocialModel {
  name: string
  url: string
  scrImage: string
  title: string
}

export const SocialData = (t: any): SocialModel[] => [
  {
    name: 'GitHub',
    url: settings.social.github.url,
    scrImage: github,
    title: t('social.titles.github')
  },
  {
    name: 'LinkedIn',
    url: settings.social.linkedin.url,
    scrImage: linkedin,
    title: t('social.titles.linkedin')
  },
  {
    name: 'Spotify',
    url: settings.social.spotify.url,
    scrImage: spotify,
    title: t('social.titles.spotify')
  },
  {
    name: 'Twitter',
    url: settings.social.twitter.url,
    scrImage: twitter,
    title: t('social.titles.twitter')
  }
]
