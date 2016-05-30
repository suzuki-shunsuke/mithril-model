import path from 'path';
import webpack from 'webpack';

module.exports = [
  {
    entry: {
      'dist/mithril-model': './src/main.js',
    },
    externals: [{
      'validator': true,
    }],
    resolve: {
      modulesDirectories: ['node_modules'],
      root: [path.resolve('.'),],
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      // new webpack.optimize.UglifyJsPlugin(),
    ],
    output: {
      path: path.join(__dirname),
      filename: '[name].umd.js',
      library: 'mmodel',
      libraryTarget: 'umd'
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        }
      }]
    }
  },
];
