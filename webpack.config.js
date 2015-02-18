module.exports = {
  cache: true,
  entry: "./client/js/index",
  output: {
    filename: "public/javascripts/client.js"
  },
  resolve: {
    extensions: ["", ".jsx", ".cjsx", ".coffee", ".js"],
    modulesDirectories: ["js", "node_modules"]
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?experimental&optional=selfContained'}
    ]
  }
};