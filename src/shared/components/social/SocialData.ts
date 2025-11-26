import LinkedinLogo from '@assets/images/social/linkedin.svg?react';
import GithubLogo from '@assets/images/social/github.svg?react';
import SpotifyLogo from '@assets/images/social/spotify.svg?react';
import MoxfieldLogo from '@assets/images/social/moxfield.svg?react';
import {SocialEnum} from './SocialEnum';

export interface SocialModel {
  name: string;
  url: string;
  logo: any;
  title: string;
}

export const SocialData = (t: any): SocialModel[] => [
  {
    name: 'GitHub',
    url: SocialEnum.githubUrl,
    logo: GithubLogo,
    title: t('social.titles.github')
  },
  {
    name: 'LinkedIn',
    url: SocialEnum.linkedinUrl,
    logo: LinkedinLogo,
    title: t('social.titles.linkedin')
  },
  {
    name: 'Spotify',
    url: SocialEnum.spotifyUrl,
    logo: SpotifyLogo,
    title: t('social.titles.spotify')
  },
  {
    name: 'Moxfield',
    url: SocialEnum.moxfield,
    logo: MoxfieldLogo,
    title: t('social.titles.moxfield')
  }
];
