module.exports = {
  mode: 'production',
  entry: {
    background: './src/background.js',
    index: './src/index.jsx'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  optimization: {
		minimize: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ["@babel/plugin-transform-react-jsx", { "pragma":"h" }]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};