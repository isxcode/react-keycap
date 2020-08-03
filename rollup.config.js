import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import sucrase from '@rollup/plugin-sucrase'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'

export default {
  input: './components/index.jsx',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    resolve({
      extensions: ['ts', '.jsx'],
    }),
    sucrase({
      transforms: ['jsx'],
      include: './components',
      exclude: 'node_modules/**',
    }),
    // typescript({
    //   sourcemap: 'true',
    // }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
}