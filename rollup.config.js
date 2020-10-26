import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

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
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    postcss({
      extract: 'style.min.css',
      minimize: true,
    }),
    // minify production code
    production && terser(),
  ],
  // indicate external modules(peer dependencies)
  external: ['react'],
};
