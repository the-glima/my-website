  // String: Custom Index Of
  String.prototype.customIndexOf = function(searchValue, fromIndex) {
    var notfound = -1;

    // Validating param: fromIndex
    // fromIndex needs to be type number and needs to be an integer
    if (typeof fromIndex !== 'number' || isNaN(fromIndex)) {
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
  }

  window.customIndexOfApp = window.customIndexOfApp || {};

  // Compare String.indexOf result and String.customIndexOf
  window.customIndexOfApp.assertMethods = function(string, searchValue, fromIndex) {
    var indexOf = string.indexOf(searchValue, fromIndex);
    var customIndexOf = string.customIndexOf(searchValue, fromIndex);
    var styleLog = {
      success: {
        label: 'padding: 10px 0; color: green; font-weight: 700',
        value: 'font-size: 12px; font-weight: 700'
      },
      error: {
        label: 'padding: 10px 4px; color: red; font-weight: 700',
        value: 'color: black; font-size: 12px; font-weight: 700'
      },
      default: {
        value: 'color: black'
      }
    }

    if (indexOf === customIndexOf) {
      console.info('%c Success: '+'%cboth methods the value: '+'%c'+indexOf+'',
        styleLog.success.label,
        styleLog.default.value,
        styleLog.success.value
      );
    } else {
      console.error('%c Error: '+'%cindeOf is: %c'+ indexOf +'%c and customIndexOf is: %c'+customIndexOf+'',
        styleLog.error.label,
        styleLog.default.value,
        styleLog.error.value,
        styleLog.default.value,
        styleLog.error.value
      );
    }
  }

  // Test cases
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'W');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'White');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'GREEN');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'Green');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'green');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'grEEn');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'Bla');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'bLa');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'AXBXC');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '1');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '123');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', ' ');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '  Qwerty');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '  Qwerty', 0);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '  Qwerty', -1);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '  Qwerty', 9999);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'Blue', 0);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'Blue', 1);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'Blue', -1);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'Blue', -100000);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'e', 10);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'xxx', 0);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'XXX', 0);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '1B2C3A', 35);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'red', 0.5);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'red', -0.234);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'red', '100');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'red', '100');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'red', '-100000');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'red', '100000');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 's', '0');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '@');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '$', 10);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '$', '!');
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '#', -1);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', '', []);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'ABC', {});
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', 'S', undefined);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', undefined);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', null);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', []);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', {});
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', new Function);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', undefined);
  window.customIndexOfApp.assertMethods('White Blue GREEN red Black ABC 123 XXX  Qwerty', null);
