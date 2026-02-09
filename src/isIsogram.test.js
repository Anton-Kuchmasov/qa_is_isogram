'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for all variants of empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return false for the string with M and m letters', () => {
    const wordWithTrick = 'MancUtdM';

    expect(isIsogram(wordWithTrick)).toBe(false);
  });

  it('should return false for `Oops!`', () => {
    expect(isIsogram(`Oops!`)).toBe(false);
  });
});
