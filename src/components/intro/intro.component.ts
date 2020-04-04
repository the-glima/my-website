import {settings} from '../../settings';

export const IntroComponent = {
  render: () => {
    const subTitle = document.getElementById('subtitle');
    const subTitleOptions = settings.subTitleOptions;

    const randomness = Math.floor(Math.random() * subTitleOptions.length);

    subTitle ? (subTitle.textContent = subTitleOptions[randomness]) : subTitleOptions[0];
  }
};
