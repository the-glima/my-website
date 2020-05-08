import husband from '../../../assets/images/photos/husband.jpg'
import headphone from '../../../assets/images/photos/phone.jpg'
import dad from '../../../assets/images/photos/dad.jpg'
import old from '../../../assets/images/photos/old.jpg'

export interface IntroModel {
  name: string
  picture: any
  position: any
  bio: any
  accent: string
}

export const IntroData = (t: any): IntroModel[] => [
  {
    name: 'default',
    picture: husband,
    position: t('position.front-end-developer'),
    bio: t('intro.default.bio-end'),
    accent: 'orange'
  },
  {
    name: 'headphone',
    picture: headphone,
    position: t('position.javascript-developer'),
    bio: t('intro.headphone.bio-end'),
    accent: 'purple'
  },
  {
    name: 'dad',
    picture: dad,
    position: t('position.full-stack-developer'),
    bio: t('intro.dad.bio-end'),
    accent: 'cyan'
  },
  {
    name: 'old',
    picture: old,
    position: t('position.software-developer'),
    bio: t('intro.old.bio-end'),
    accent: 'green'
  }
]
