const path = require("path")
var webpack = require("webpack")

const mainConfig = {
  entry: "./src/index.js",
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|otf|TTF)$/,
        use: ["file-loader"]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
}

const teamConfig = {
  entry: "./team/index.js",
  resolve: {
    modules: [path.resolve(__dirname, 'team'), 'node_modules']
  },
  output: {
    filename: "team/team-bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|otf|TTF)$/,
        use: ["file-loader"]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
}

module.exports = [mainConfig, teamConfig]