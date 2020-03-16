'use strict';

(() => {
  const updateSubTitle = () => {
    const subiTtle = document.getElementById('subtitle');
    const subTitleOptions = [
      'Front-End Developer',
      'Front-End Enginner',
      'JavaScript Enginner',
      'JavaScript Developer',
      'Software Developer',
      'Software Enginner',
      'Infrastructure Developer',
      'Web Designer',
      'UI Developer',
      '10x Enginner *',
      'JS-Framework Developer'
    ];

    const randomness = Math.floor(Math.random() * subTitleOptions.length);

    subiTtle.textContent = subTitleOptions[randomness];
  };

  // Init
  (() => {
    updateSubTitle();
  })();
})();
