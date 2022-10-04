const path = require("path");

module.exports = (_env) => {
  return {
    entry: ["./fix.js", "./src/index.tsx"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      libraryTarget: "umd",
      globalObject: "this",
      sourceMapFilename: "[file].map",
      devtoolModuleFilenameTemplate: "webpack:///[absolute-resource-path]",
    },
    externals: {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react",
      },
    },
    target: ["web", "es5"],
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
              loader: "babel-loader",
            },
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
          test: /\.js$/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.svg$/,
          use: ["raw-loader"],
        },
      ],
    },
    watchOptions: {
      ignored: [
        path.resolve(__dirname, "dist"),
        path.resolve(__dirname, "node_modules"),
      ],
    },
    optimization: {
      minimize: false,
    },
  };
};
