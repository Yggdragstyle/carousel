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

module.exports = {
  relativeTo,
}
