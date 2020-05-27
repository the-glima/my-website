import husband from '../../assets/images/photos/husband.jpg'
import headphone from '../../assets/images/photos/phone.jpg'
import dad from '../../assets/images/photos/dad.jpg'
import old from '../../assets/images/photos/old.jpg'
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
    name: 'headphone',
    picture: headphone,
    position: i18n.t('position.javascript-developer'),
    bio: i18n.t('header.headphone.bio-end'),
    color: 'purple'
  },
  {
    name: 'dad',
    picture: dad,
    position: i18n.t('position.full-stack-developer'),
    bio: i18n.t('header.dad.bio-end'),
    color: 'cyan'
  },
  {
    name: 'old',
    picture: old,
    position: i18n.t('position.software-developer'),
    bio: i18n.t('header.old.bio-end'),
    color: 'yellow'
  }
]
