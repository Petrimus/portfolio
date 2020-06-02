const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    /* publicPath: '/', */  
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  }, 
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3000,   
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
       exclude: /node_modules\/react-visibility-sensor\/.*/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],        
      },
      {
        test: /\.(jpe?g|png|webp|pdf|svg)$/i, 
        loader: 'file-loader' ,
        options: {
          name: 'images/[name].[ext]'
        }      
      }
    ],
  },
}

module.exports = config