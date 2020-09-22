import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { eslint } from 'rollup-plugin-eslint'
import chalk from 'chalk'
// const typescript = require('@rollup/plugin-typescript')
const { env, isProd, isDev, relativeTo } = require('./core/utils')
const { log } = console

// Display state of config
log(chalk`\n{cyan Rollup config:}\n\tenv: {yellow ${env}}`)

const extensions = ['.js', '.jsx', '.ts', '.tsx']

// B A S E  ~  C O N F I G
const config = {
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    name: 'Carousel',
    // TODO: choose between iife or es
    format: 'es',
  },
  // TODO: prefere runtime to bundle for library ?
  plugins: [
    nodeResolve({ extensions }),
    eslint({
      cache: relativeTo('.cache/front/eslint/'),
      emitError: true,
      emitWarning: true,
      failOnError: isProd,
      configFile: relativeTo(`core/eslint/${isDev ? 'dev.eslintrc.js' : 'prod.eslintrc.js'}`),
    }),
    // typescript(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions,
    }),
    commonjs(),
  ],
}

// P R O D U C T I O N
if (isProd) {
  config.plugins.push(terser())
}

module.exports = config
