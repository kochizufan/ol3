const path = require('path');
module.exports = {
  entry: './build/maplat.js',
  devtool: 'source-map',
  mode: 'production',
  output: {
    path: path.resolve('./build/maplat'),
    filename: 'ol-maplat.js',
    library: 'ol',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
};
