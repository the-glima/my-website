var inputSearch = document.getElementById('search-value');
var buttonTests = document.getElementById('run-tests');
var fromIndex = document.getElementById('from-index');
var string = document.getElementById('string');
var result = document.getElementById('result');

window.myApp = window.myApp || {};

String.prototype.customIndexOf = function(searchValue, fromIndex) {
  var notfound = -1;

  // Validating param: fromIndex
  // fromIndex needs to be type number and needs to be an integer
  if (typeof fromIndex !== 'number' && isNaN(fromIndex)) {
    fromIndex = parseInt(fromIndex);
  }

  if (typeof fromIndex === 'number' && !Number.isInteger(fromIndex)) {
    fromIndex = 0;
  }

  // For fromIndex values lower than 0 or greater than str.length,
  // the search starts at index 0 and str.length respectively.
  if (!fromIndex || fromIndex < 0) {
    fromIndex =  0;
  } else if (fromIndex > this.length) {
    fromIndex = this.length;
  }

  // Validating param: searchValue
  // searchValue needs to be type string
  if (typeof searchValue !== 'string' && !Array.isArray(searchValue)) {
    return notfound;
  }

  // searchValue array quirks
  if (Array.isArray(searchValue)) {
    return 0;
  }

  // searchValue empty string quirks
  if (searchValue === '') {
    if (fromIndex >= this.length) {
      return this.length;
    } else if (fromIndex < 0) {
      return 0;
    } else {
      return fromIndex;
    }
  }

  var stringLength = this.length;
  var searchValueLength = searchValue.length;
  var count = 0;

  if (searchValueLength > stringLength) {
    return notfound;
  }

  for (var i = 0; i <= stringLength - searchValueLength; i++) {
    for (var j = 0; j < searchValueLength; j++) {
      if (this[j+i] === searchValue[j]) {
        count++;
        if (count === searchValueLength && i >= fromIndex) {
          return i;
        }
      } else {
        count = 0;
        break;
      }
    }
  }
  return notfound;
};

// Compare String.indexOf result and String.customIndexOf
window.myApp.assertMethods = function(string, searchValue, fromIndex) {
  var indexOf = string.indexOf(searchValue, fromIndex);
  var customIndexOf = string.customIndexOf(searchValue, fromIndex);
  if (indexOf === customIndexOf) {
    return {
      type: 'success',
      responseText: 'Success: the index is '+ indexOf
    };
  } else {
    return {
      type: 'error',
      responseText: 'Error: String.indexOf is '+ indexOf +' and customIndexOf is '+customIndexOf
    };
  }
};

window.myApp.runTests = function(string, searchValue, fromIndex, callback) {
  callback(window.myApp.assertMethods(string, searchValue, fromIndex));
};

document.addEventListener('DOMContentLoaded', function () {
  buttonTests.addEventListener('click', function() {
    window.myApp.runTests(string.innerText, inputSearch.value, fromIndex.value, function(value) {
      result.innerText = value.responseText;

      if (!result.classList.contains(value.type)) {
        result.classList.add(value.type);
      }
    });
  });
});
