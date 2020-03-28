'use strict';

(() => {
  const updateSubTitle = () => {
    const subTitle = document.getElementById('subtitle')
    const subTitleOptions = [
      'Front-End Developer',
      'Front-End Engineer',
      'JavaScript Engineer',
      'JavaScript Developer',
      'Software Developer',
      'Software Engineer',
      'Infrastructure Developer',
      'Web Designer',
      'UI Developer',
      '10x Engineer *',
      'JS-Framework Developer'
    ]

    const randomness = Math.floor(Math.random() * subTitleOptions.length)

    subTitle 
      ? subTitle.textContent = subTitleOptions[randomness]
      : subTitleOptions[0]
  }

  // Init
  (() => {
    updateSubTitle()
  })()
})()
