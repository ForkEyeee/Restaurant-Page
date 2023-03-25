const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devtool:
    process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
};
module.exports = config;
