var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");  //记得先install该模块
const NODE_ENV = process.env.NODE_ENV
var entryStr='./src/main.js'
var outFileName='build.js';
var outPublicPath ="./dist/";
console.log(process.env.NODE_ENV )
if (process.env.NODE_ENV === 'production') {
  entryStr='./src/lib/index.js';
  outFileName= 'vue-mini-alert.min.js';
  outPublicPath="./"
}

module.exports = {
  
  entry: entryStr,
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: outPublicPath,
    filename: outFileName,
    library: "VueMiniAlert", // 指定的就是你使用require时的模块名     
    libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的     
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader:'vue-style-loader!css-loader',
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /.woff|.woff2|.svg|.eot|.ttf/,
        loader: 'file-loader',
        options: {
          name: 'css/[name].[ext]?[hash]',
          assetsPublicPath: '/'
          
        }
        
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
