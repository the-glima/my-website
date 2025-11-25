import ai from '../../assets/images/photos/ai.jpg';
import guitar from '../../assets/images/photos/guitar.jpg';
import me from '../../assets/images/photos/me.jpg';
import running from '../../assets/images/photos/running.jpg';
import i18n from '../../i18n';

export type HeaderModelName = 'me' | 'running' | 'guitar' | 'ai';

export interface HeaderModel {
  name: HeaderModelName;
  picture: any;
  position: any;
  bio: any;
  color: string;
}

export const HeaderData = (): HeaderModel[] => [
  {
    name: 'me',
    picture: me,
    position: i18n.t('position.senior-front-end-developer'),
    bio: i18n.t('header.me.bio-end'),
    color: 'orange'
  },
  {
    name: 'running',
    picture: running,
    position: i18n.t('position.senior-full-stack-developer'),
    bio: i18n.t('header.running.bio-end'),
    color: 'cyan'
  },
  {
    name: 'guitar',
    picture: guitar,
    position: i18n.t('position.front-end-developer'),
    bio: i18n.t('header.guitar.bio-end'),
    color: 'purple'
  },
  {
    name: 'ai',
    picture: ai,
    position: i18n.t('position.ui-developer'),
    bio: i18n.t('header.ai.bio-end'),
    color: 'red'
  }
];
