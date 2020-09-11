const { relativeTo } = require('./core/utils')

const { log } = console

// Mode of building
const env = /dev/.test(String(process.env.NODE_ENV)) ? 'development' : 'production'
const isProd = env === 'production'
const isDev = !isProd

// Display state of config
log(`Webpack config:\n\tenv: ${env}`)

const config = {
  mode: env || 'production',
  entry: relativeTo('src/index.ts'),

  output: {
    path: relativeTo('build'),
    filename: `index.js`,
    publicPath: relativeTo('build'),
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.scss', '.css', '.png', '.svg', '.gif', '.jpeg', '.jpg', '.webp'],
  },

  module: {
    rules: [
      {
        test: /\.m?(j|t)(s|x)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              cache: relativeTo('.cache/front/eslint/'),
              emitError: true,
              emitWarning: true,
              failOnError: isProd,
              configFile: relativeTo(`core/eslint/${isDev ? 'dev.eslintrc.js' : 'prod.eslintrc.js'}`),
            },
          },
        ],
      },
    ],
  },
}

module.exports = config
