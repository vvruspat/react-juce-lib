const path = require("path");

module.exports = (_env) => {
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      sourceMapFilename: "[file].map",
      devtoolModuleFilenameTemplate: "webpack:///[absolute-resource-path]",
    },
    devtool: "source-map",
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: path.resolve(__dirname, "node_modules"),
          use: [
            {
              loader: "ts-loader",
              options: {
                compilerOptions: {
                  noEmit: false,
                },
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          exclude: path.resolve(__dirname, "node_modules"),
          use: ["raw-loader"],
        },
      ],
    },
  };
};
