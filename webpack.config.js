var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'sourcemap',
  entry: [
    'font-awesome-webpack!./font-awesome.config.js', 
    'bootstrap-loader', 
    './client/app/app.js'
  ],
//  entry: {},
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.styl$/, loader: 'style!css!postcss-loader!stylus' },
       { test: /\.scss$/, loader: 'style!css!postcss-loader!sass!sass-resources' },
       { test: /\.css$/, loader: 'style!css!postcss-loader' },
       { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
       { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
       { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
       { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
       { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    }),

    new ExtractTextPlugin("[name].css")
  ],

  postcss: function () {
      return [autoprefixer, precss];
  },

  sassResources: [ './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss' ]
};
