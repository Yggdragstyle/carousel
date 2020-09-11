const baseConfig = require('./base.eslintrc')

const prodConfig = {
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-alert': 'error',
    'no-debugger': 'error',
  },
}

module.exports = Object.assign(baseConfig, prodConfig)
