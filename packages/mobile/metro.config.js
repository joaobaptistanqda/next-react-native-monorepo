const path = require('path');

module.exports = {
  projectRoot: path.resolve(__dirname, '.'),
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, './../hooks')
  ],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
};
