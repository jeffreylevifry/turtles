module.exports = {
  entry: "./app/components/main.jsx",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }
    , {
      test: /\.(png|gif)$/,
      loader: "url-loader?limit=5000"
    }
    , {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
    }]
}}