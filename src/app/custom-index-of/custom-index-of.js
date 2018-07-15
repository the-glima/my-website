export default class StringCustomIndexOf {
  customIndexOf(searchValue, fromIndex) {
    let notfound = -1;

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
      fromIndex = 0;
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

    const stringLength = this.length;
    const searchValueLength = searchValue.length;
    let count = 0;

    if (searchValueLength > stringLength) {
      return notfound;
    }

    for (let i = 0; i <= stringLength - searchValueLength; i++) {
      for (let j = 0; j < searchValueLength; j++) {
        if (this[j + i] === searchValue[j]) {
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
  }

  // Comparing String.indexOf and String.customIndexOf
  compareMethods(valueObj) {
    const indexOf = valueObj.string.indexOf(valueObj.value, valueObj.index);
    const customIndexOf = valueObj.string.customIndexOf(valueObj.value, valueObj.index);

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
  }

  runTests(valueObj, callback) {
    callback(this.compareMethods(valueObj));
  }
}
