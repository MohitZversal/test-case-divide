const divide = require('./divide');

test('4 divided by 2 should give 2', () => {
  expect(divide(4, 2)).toBe(2);
});

test('-4 divided by 2 should give 2', () => {
  expect(divide(-4, 2)).toBe(-2);
});

test('0 divided by 5 should give 0', () => {
  expect(divide(0, 5)).toBe(0);
});

test('throws an error if try to divide a number with 0', () => {
  expect(() => divide(5, 0)).toThrow();
});
