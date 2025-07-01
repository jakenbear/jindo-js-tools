const {
  reverseString,
  isPalindrome,
  countVowels,
  slugify,
} = require('../utils/string');

test('reverseString works', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('isPalindrome works', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('Hello')).toBe(false);
});

test('countVowels works', () => {
  expect(countVowels('hello world')).toBe(3);
});

test('slugify works', () => {
  expect(slugify('Hello World! This is Cool.')).toBe('hello-world-this-is-cool');
});
