const path = require('path')

console.log('From utils:', process.cwd())

/**
 * Resolve relative path
 *
 * @param {string} relativePath relative path of file to resolve
 */
function relativeTo(relativePath) {
  return path.resolve(__dirname, '../', relativePath)
}

// Mode of building
const env = /dev/.test(String(process.env.NODE_ENV)) ? 'development' : 'production'
const isProd = env === 'production'
const isDev = !isProd

module.exports = {
  relativeTo,
  env,
  isProd,
  isDev,
}
