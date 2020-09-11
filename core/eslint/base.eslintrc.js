module.exports = {
  extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    prettier: true,
    'space-before-function-paren': 'always',
  },
}
