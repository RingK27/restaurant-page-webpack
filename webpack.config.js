const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/homeTab.js',
    menu: './src/menuTab.js',
    contacts: './src/contactsTab.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};