const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      // Loading images
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },
      // Loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      },

      // Loading css
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader' }
        ]
      },

      // Loading sass/scss
      {
        test: /\.s[ca]ss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
};
