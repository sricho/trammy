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
      { test: /\.js$/, exclude: /node_modules/, loader: "6to5-loader?experimental&optional=selfContained"}
    ]
  }
};