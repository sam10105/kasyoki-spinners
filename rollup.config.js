import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

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
    },
  ],
  plugins: [commonjs(), nodeResolve()],
};
