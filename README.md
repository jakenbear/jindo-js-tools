# 🐕 jindo-js-tools

![npm version](https://img.shields.io/npm/v/jindo-js-tools.svg)
![npm downloads](https://img.shields.io/npm/dm/jindo-js-tools.svg)

**A fun, lightweight utility library for JavaScript — inspired by the curious spirit of the Jindo dog.**

---

![jindo-js-tools](https://placehold.co/600x150?text=JINDO+JS+TOOLS+🐾)

---

## ✨ Features

- 📦 Array helpers – `sortAsc`, `sortDesc`
- 🔢 Number tools – `isEven`, `isOdd`
- 🔤 String functions – `reverseString`, `isPalindrome`, `countVowels`, `slugify`
- ✅ Fully tested with [Jest](https://jestjs.io)

---

## 📦 Install

Install via npm:

```bash
npm install jindo-js-tools
```

Or clone locally:

```bash
git clone https://github.com/jakenbear/jindo-js-tools.git
cd jindo-js-tools
npm install
```

---

## 🧪 Run Tests

```bash
npm test
```

Or watch tests live:

```bash
npx jest --watch
```

---

## 🚀 Usage

```js
const {
  sortAsc,
  isEven,
  isPalindrome,
  slugify,
} = require('jindo-js-tools');

console.log(sortAsc([5, 2, 9]));          // [2, 5, 9]
console.log(isEven(4));                   // true
console.log(isPalindrome('racecar'));     // true
console.log(slugify('Hello World!'));     // "hello-world"
```

---

## 🧩 Modules

### 📚 Array

```js
sortAsc([3, 2, 1]);     // [1, 2, 3]
sortDesc([1, 2, 3]);    // [3, 2, 1]
```

### 🔢 Number

```js
isEven(4);              // true
isOdd(5);               // true
```

### 🔤 String

```js
reverseString('jindo');          // "odnij"
isPalindrome('A Toyota');        // true
countVowels('hello world');      // 3
slugify('Hello World!');         // "hello-world"
```

---

## 🐾 Contributing

Want to add a new function? Fork the repo, add your utility and test, and submit a PR!

---

## 📄 License

MIT © 2025 Jake Reardon