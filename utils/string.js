function reverseString(str) {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}

function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

module.exports = {
  reverseString,
  isPalindrome,
  countVowels,
  slugify,
};
