const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { relativeTo } = require('../core/utils')

const { log } = console

// Mode of building
const env = /dev/.test(String(process.env.NODE_ENV)) ? 'development' : 'production'
const isProd = env === 'production'
const isDev = !isProd

// Display state of config
log(`Webpack config:\n\tenv: ${env}
Relative to: "${relativeTo('.')}"`)

const config = {
  mode: env || 'production',
  entry: relativeTo('demo/assets/app.js'),

  output: {
    path: relativeTo('demo/public/build'),
    filename: `app.js`,
    publicPath: relativeTo('demo/public/build'),
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
          // {
          //   loader: 'eslint-loader',
          //   options: {
          //     cache: relativeTo('.cache/front/eslint/'),
          //     emitError: true,
          //     emitWarning: true,
          //     failOnError: isProd,
          //     configFile: relativeTo(`core/eslint/${isDev ? 'dev.eslintrc.js' : 'prod.eslintrc.js'}`),
          //   },
          // },
        ],
      },
      {
        test: /\.s?css$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: isDev,
            },
          },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `app.css`,
      // chunkFilename: `[id]${hashName}.css`,
      // publicPath: (resourcePath, context) => {
      //     // publicPath is the relative path of the resource to the context
      //     // e.g. for ./css/admin/main.css the publicPath will be ../../
      //     // while for ./css/main.css the publicPath will be ../
      //     return path.relative(path.dirname(resourcePath), context) + '/';
      // },
    }),
  ],
}

module.exports = config
