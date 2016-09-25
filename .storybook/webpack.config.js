const path = require('path');

module.exports = {
  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /libs|vendor|node_modules/,
        include: path.resolve(__dirname, '../components'),
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /.css$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(__dirname, '../components')
      },
      {
        test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000'
      },
      {
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/, loader: 'file'
      }
    ]
  }
};
