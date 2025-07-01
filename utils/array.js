function sortAsc(arr) {
  return [...arr].sort((a, b) => a - b);
}

function sortDesc(arr) {
  return [...arr].sort((a, b) => b - a);
}

module.exports = { sortAsc, sortDesc };
