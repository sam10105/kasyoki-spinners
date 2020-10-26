import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.es.js',
      format: 'es',
    },
    {
      name: 'ReactCssSpinners',
      file: 'dist/bundle.umd.js',
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
  ],
  plugins: [
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
    commonjs(),
    nodeResolve(),
    // minify production code
    production && terser(),
  ],
  // indicate external modules(peer dependencies)
  external: ['react'],
};
