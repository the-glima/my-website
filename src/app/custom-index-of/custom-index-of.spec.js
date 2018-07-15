import StringCustomIndexOf from './custom-index-of';

const stringCustomIndexOf = new StringCustomIndexOf();
String.prototype.customIndexOf = stringCustomIndexOf.customIndexOf;

describe('String Custom IndexOf Method', function () {
  const sampleString = 'White Blue GREEN red Black ABC 123 XXX Qwerty [] {} new Function ... !@#$%ˆ&*()';

  it('should return the index of a certain value', function () {
    expect(sampleString.customIndexOf('W')).toEqual(0);
    expect(sampleString.customIndexOf('White')).toEqual(0);
    expect(sampleString.customIndexOf('GREEN')).toEqual(11);
    expect(sampleString.customIndexOf('green')).toEqual(-1);
    expect(sampleString.customIndexOf('grEEn')).toEqual(-1);
    expect(sampleString.customIndexOf('Bla')).toEqual(21);
    expect(sampleString.customIndexOf('bLa')).toEqual(-1);
    expect(sampleString.customIndexOf('AXBXC')).toEqual(-1);
    expect(sampleString.customIndexOf('1')).toEqual(31);
    expect(sampleString.customIndexOf('123')).toEqual(31);
    expect(sampleString.customIndexOf('')).toEqual(0);
    expect(sampleString.customIndexOf(' ')).toEqual(5);
    expect(sampleString.customIndexOf('Qwerty')).toEqual(39);
    expect(sampleString.customIndexOf('Qwerty', 0)).toEqual(39);
    expect(sampleString.customIndexOf('QUERTY', 0)).toEqual(-1);
    expect(sampleString.customIndexOf('QuErTY', 0)).toEqual(-1);
    expect(sampleString.customIndexOf('Qwerty', -1)).toEqual(39);
    expect(sampleString.customIndexOf('Qwerty', 9999)).toEqual(-1);
    expect(sampleString.customIndexOf('Blue', 0)).toEqual(6);
    expect(sampleString.customIndexOf('Blue', -1)).toEqual(6);
    expect(sampleString.customIndexOf('Blue', 1000000)).toEqual(-1);
    expect(sampleString.customIndexOf('1B2C3A', 53)).toEqual(-1);
    expect(sampleString.customIndexOf('red')).toEqual(17);
    expect(sampleString.customIndexOf('red', 0.5)).toEqual(17);
    expect(sampleString.customIndexOf('red', -0.5)).toEqual(17);
    expect(sampleString.customIndexOf('red', 0.234)).toEqual(17);
    expect(sampleString.customIndexOf('red', -0.234)).toEqual(17);
    expect(sampleString.customIndexOf('@')).toEqual(70);
    expect(sampleString.customIndexOf('@', 10)).toEqual(70);
    expect(sampleString.customIndexOf('$', '!')).toEqual(72);
    expect(sampleString.customIndexOf('#', -1)).toEqual(71);
    expect(sampleString.customIndexOf(' ', [])).toEqual(5);
    expect(sampleString.customIndexOf('', [])).toEqual([]);
    expect(sampleString.customIndexOf('ABC', {})).toEqual(27);
    expect(sampleString.customIndexOf('S', undefined)).toEqual(-1);
    expect(sampleString.customIndexOf(undefined, undefined)).toEqual(-1);
    expect(sampleString.customIndexOf(null)).toEqual(-1);
    expect(sampleString.customIndexOf([])).toEqual(0);
    expect(sampleString.customIndexOf(new Function)).toEqual(-1);
    expect(sampleString.customIndexOf({})).toEqual(-1);
  });
});
