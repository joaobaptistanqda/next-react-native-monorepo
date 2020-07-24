
module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['seegno'],
  globals: {
    _config: 'readonly'
  },
  rules: {
    'id-length': ['error', {
      exceptions: ['t']
    }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-no-literals': ['off', { noStrings: true }],
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'never' }],
    'react/prop-types': ['error', { ignore: ['form', 'i18n', 'onSubmit'] }],
    'switch-case/newline-between-switch-case': ['error', 'always', { fallthrough: 'never' }]
  },
  settings: {
    react: {
      version: '16.13'
    }
  }
};
