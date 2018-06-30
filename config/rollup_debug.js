// Rollup configuration for the full build

import noderesolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';

export default {
  input: 'src/index.js',
  output: [
    {file: 'build/ol-debug.js', format: 'iife', sourcemap: false}
  ],
  plugins: [
    noderesolve(),
    commonjs(),
    buble()
  ]
};
