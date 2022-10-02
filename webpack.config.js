const path = require("path");

module.exports = (_env) => {
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      libraryTarget: "umd",
      globalObject: "this",
      sourceMapFilename: "[file].map",
      devtoolModuleFilenameTemplate: "webpack:///[absolute-resource-path]",
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
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: {
                        browsers: [
                          "> 1%",
                          "last 2 versions",
                          "Firefox ESR",
                          "ie 11",
                        ],
                      },
                    },
                  ],
                ],
              },
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
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      browsers: [
                        "> 1%",
                        "last 2 versions",
                        "Firefox ESR",
                        "ie 11",
                      ],
                    },
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.svg$/,
          exclude: path.resolve(__dirname, "node_modules"),
          use: ["raw-loader"],
        },
      ],
    },
    optimization: {
      minimize: false,
    },
  };
};
