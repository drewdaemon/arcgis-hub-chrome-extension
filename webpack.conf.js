module.exports = {
  mode: 'production',
  entry: {
    background: './src/background.js',
    index: ['babel-polyfill', './src/index.jsx']
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
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "resolve-url-loader", // fixes sass imports
            "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};