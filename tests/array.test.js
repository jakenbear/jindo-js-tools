const { sortAsc, sortDesc } = require('../utils/array');

test('sortAsc works', () => {
  expect(sortAsc([3, 1, 2])).toEqual([1, 2, 3]);
});

test('sortDesc works', () => {
  expect(sortDesc([3, 1, 2])).toEqual([3, 2, 1]);
});
