// Rollup configuration for the full build

import noderesolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';

export default {
  input: 'src/maplat.js',
  output: [
    {file: 'build/ol-maplat.js', format: 'iife', sourcemap: false}
  ],
  plugins: [
    noderesolve(),
    commonjs(),
    buble()
  ]
};
