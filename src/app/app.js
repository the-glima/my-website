import '../assets/style.css';
import StringCustomIndexOf from './custom-index-of/custom-index-of';

const stringCustomIndexOf = new StringCustomIndexOf();
String.prototype.customIndexOf = stringCustomIndexOf.customIndexOf;

window.customIndexOfApp = window.customIndexOfApp || {};

((customIndexOfApp) => {
  customIndexOfApp.compare = () => {
    const stringEl = document.getElementById('string');
    const inputSearchEl = document.getElementById('search-value');
    const fromIndexEl = document.getElementById('from-index');
    const resultEl = document.getElementById('result');

    const valueObj = {
      string: stringEl.innerText,
      value: inputSearchEl.value,
      index: fromIndexEl.value
    };

    stringCustomIndexOf.runTests(valueObj, (value) => {
      resultEl.innerText = value.responseText;

      if (!resultEl.classList.contains(value.type)) {
        resultEl.classList.add(value.type);
      }
    });
  };
})(window.customIndexOfApp = window.customIndexOfApp || {});
