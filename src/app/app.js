import '../assets/style.css';
import customIndexOf from './custom-index-of/custom-index-of';

String.prototype.customIndexOf = customIndexOf;
window.myApp = window.myApp || {};

const inputSearch = document.getElementById('search-value');
const buttonTests = document.getElementById('run-tests');
const fromIndex = document.getElementById('from-index');
const string = document.getElementById('string');
const result = document.getElementById('result');

// Compare String.indexOf result and String.customIndexOf
myApp.assertMethods = (string, searchValue, fromIndex) => {
  const indexOf = string.indexOf(searchValue, fromIndex);
  const customIndexOf = string.customIndexOf(searchValue, fromIndex);

  if (indexOf === customIndexOf) {
    return {
      type: 'success',
      responseText: 'Success: the index is ' + indexOf
    };
  } else {
    return {
      type: 'error',
      responseText: 'Error: String.indexOf is ' + indexOf + ' and customIndexOf is ' + customIndexOf
    };
  }
};

myApp.runTests = (string, searchValue, fromIndex, callback) => {
  callback(window.myApp.assertMethods(string, searchValue, fromIndex));
};

// Click on button to run tests
document.addEventListener('DOMContentLoaded', () => {
  buttonTests.addEventListener('click', () => {
    window.myApp.runTests(string.innerText, inputSearch.value, fromIndex.value, (value) => {
      result.innerText = value.responseText;

      if (!result.classList.contains(value.type)) {
        result.classList.add(value.type);
      }
    });
  });
});
