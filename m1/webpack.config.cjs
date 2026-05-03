const path = require("path");

module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/math.js",
  output: {
    path: path.resolve(__dirname, "dist-webpack"),
    filename: "bundle.js",
    library: { type: "commonjs2" },
  },
  optimization: { minimize: true },
};
