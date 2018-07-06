import '../assets/style.css';
import StringCustomIndexOf from './custom-index-of/custom-index-of';

const stringCustomIndexOf = new StringCustomIndexOf();
String.prototype.customIndexOf = stringCustomIndexOf.customIndexOf;

document.addEventListener('DOMContentLoaded', () => {
  const buttonEl = document.getElementById('run-tests');
  const fromIndexEl = document.getElementById('from-index');
  const stringEl = document.getElementById('string');
  const resultEl = document.getElementById('result');
  const inputSearchEl = document.getElementById('search-value');

  buttonEl.addEventListener('click', () => {
    stringCustomIndexOf.runTests(stringEl.innerText, inputSearchEl.value, fromIndexEl.value, (value) => {
      resultEl.innerText = value.responseText;

      if (!resultEl.classList.contains(value.type)) {
        resultEl.classList.add(value.type);
      }
    });
  });
});
