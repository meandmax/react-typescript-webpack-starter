const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'app',
  target: 'web',
  devtool: 'eval-source-map',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.scss'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'babel!ts',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader!sass-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
