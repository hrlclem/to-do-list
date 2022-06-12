const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  target: "node",
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
}
};