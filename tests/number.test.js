const { isEven, isOdd } = require('../utils/number');

test('isEven works', () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
});

test('isOdd works', () => {
  expect(isOdd(3)).toBe(true);
  expect(isOdd(2)).toBe(false);
});
