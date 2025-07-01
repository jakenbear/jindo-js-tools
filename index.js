const arrayUtils = require('./utils/array');
const numberUtils = require('./utils/number');
const stringUtils = require('./utils/string');

module.exports = {
  ...arrayUtils,
  ...numberUtils,
  ...stringUtils,
};
