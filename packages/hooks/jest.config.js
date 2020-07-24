const { name } = require('./package.json');

module.exports = {
  displayName: name,
  name,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  }
};
