import husband from '../../assets/images/photos/husband.jpg'
import headphones from '../../assets/images/photos/headphones.jpg'
import drawing from '../../assets/images/photos/drawing.jpg'
import dude from '../../assets/images/photos/dude.jpg'
import i18n from '../../i18n'

export interface HeaderModel {
  name: string
  picture: any
  position: any
  bio: any
  color: string
}

export const HeaderData = (): HeaderModel[] => [
  {
    name: 'default',
    picture: husband,
    position: i18n.t('position.front-end-developer'),
    bio: i18n.t('header.default.bio-end'),
    color: 'orange'
  },
  {
    name: 'headphones',
    picture: headphones,
    position: i18n.t('position.javascript-developer'),
    bio: i18n.t('header.headphone.bio-end'),
    color: 'purple'
  },
  {
    name: 'drawing',
    picture: drawing,
    position: i18n.t('position.full-stack-developer'),
    bio: i18n.t('header.drawing.bio-end'),
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
