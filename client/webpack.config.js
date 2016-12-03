var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var CopyWebpackPlugin = require('copy-webpack-plugin'); //Copy文件
var autoprefixer = require('autoprefixer');



var serverPath = '/dist/'; //服务器路径
var devPath = __dirname + '/dist/';

var src = __dirname + '/src/';

var plugins = [];

if (process.argv.indexOf('-p') > -1) { //生产环境
  plugins.push(new webpack.DefinePlugin({ //编译成生产版本
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }));
  serverPath = '/react-cnode/dist/';
  devPath = __dirname + '/react-cnode/dist/';
}

plugins.push(new ExtractTextPlugin('[name].css')); //css单独打包

plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
  filename: devPath + 'index.html', //生成的html存放路径，相对于 path
  template: './src/index.html', //html模板路径
  hash: true    //为静态资源生成hash值
}));

plugins.push(new CopyWebpackPlugin([
  {
    from: __dirname + '/src/static/',
    to: __dirname + '/dist/',
    ignore: [
      'gulpfile.js',
      'package.json',
      'node_modules/**/*'
    ],
    // By default, we only copy modified files during
    // a watch or webpack-dev-server build. Setting this
    // to `true` copies all files.
    copyUnmodified: true
  }
])); //Copy静态文件

module.exports = {
  entry: {
    app: './src/index.js', //编译的入口文件
  },
  output: {
    serverPath, //编译好的文件，在服务器的路径
    devPath, //编译到当前目录
    filename:  devPath + '[name].js',  //编译后的文件名字,
    chunkFilename: devPath + '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /^node_modules$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.css$/,
        exclude: /^node_modules$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
      }, {
        test: /\.less/,
        exclude: /^node_modules$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
      }, {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
        exclude: /^node_modules$/,
        loader: 'file-loader?name=[name].[ext]'
      }, {
        test: /\.(png|jpg)$/,
        exclude: /^node_modules$/,
        loader: 'url?limit=20000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
      }, {
        test: /\.jsx$/,
        exclude: /^node_modules$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  postcss:[autoprefixer({browsers:['last 2 versions']})],
  plugins,
  resolve: {
    extensions: ['', '.js', '.jsx'], //后缀名自动补全
    alias: {
      // 自定义路径别名
      ROUTE: src + 'routes',
      APP: src + 'app',
      COMPONENTS: src + 'components'
    }
  },
  devServer: {
    // This is required for webpack-dev-server. The path should
    // be an absolute path to your build destination.
    outputPath: __dirname + '/dist/'
  }
};
