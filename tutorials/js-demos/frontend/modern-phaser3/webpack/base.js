const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js",
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 80,
    host: "0.0.0.0", // server to be accessible externally
    public: "localhost", // force to open localhost instead of 0.0.0.0
    open: true, // open the default browser
    historyApiFallback: true, // serve index.html instead of routes leading to no specific ressource
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        //pathRewrite: {'^/api' : ''}
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader",
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: "file-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../"),
    }),
    /* For more advanced use cases, these two global variables determine which renderer is included in the Phaser build. If you only want to run your game with WebGL, then you’d set WEBGL_RENDERER to true, and CANVAS_RENDERER to false. This way, your final code bundle would be smaller because all the canvas rendering code would be left out.*/
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    //copy our assets from the /src/assets folder into /dist/assets.
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "../src/assets"),
          to: path.join(__dirname, "../dist/assets"),
        },
      ],
    }),
  ],
};
