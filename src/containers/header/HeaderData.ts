import husband from '../../assets/images/photos/husband.jpg'
import headphones from '../../assets/images/photos/headphones.jpg'
import me from '../../assets/images/photos/me.jpg'
import dude from '../../assets/images/photos/dude.jpg'
import i18n from '../../i18n'

export type HeaderModelName = 'default' | 'headphones' | 'me' | 'dude'

export interface HeaderModel {
  name: HeaderModelName
  picture: any
  position: any
  bio: any
  color: string
}

export const HeaderData = (): HeaderModel[] => [
  {
    name: 'me',
    picture: me,
    position: i18n.t('position.front-end-developer'),
    bio: i18n.t('header.me.bio-end'),
    color: 'orange'
  },
  {
    name: 'headphones',
    picture: headphones,
    position: i18n.t('position.javascript-developer'),
    bio: i18n.t('header.headphones.bio-end'),
    color: 'purple'
  },
  {
    name: 'default',
    picture: husband,
    position: i18n.t('position.full-stack-developer'),
    bio: i18n.t('header.default.bio-end'),
    color: 'cyan'
  },
  {
    name: 'dude',
    picture: dude,
    position: i18n.t('position.software-developer'),
    bio: i18n.t('header.dude.bio-end'),
    color: 'yellow'
  }
]
