const { name } = require('./package.json');

module.exports = {
  displayName: name,
  name,
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  }
};
