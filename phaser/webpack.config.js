module.exports = {
  entry: './src/app.ts',
  output: {
    filename: './build/bundle.js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  //resolve: {
  //      extensions: ['.ts', '.tsx', '.js', '.jsx'],
  //      modules: ["node_modules"]
  //},
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader",
        exclude: [
          /node_modules/,
        ],
      },
    ],
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader"
      }
    ]
  }
}
