const path = require('path');

module.exports = {
  mode: 'development', // сменив на production и запустив gulp build сделает минификацию js
  output: {
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, 'source/js/scripts'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000
  }
};
