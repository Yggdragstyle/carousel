const baseConfig = require('./base.eslintrc')

const devConfig = {
  rules: {
    'no-console': 0,
    'no-alert': 0,
    'no-debugger': 0,
  },
}

module.exports = Object.assign(baseConfig, devConfig)
