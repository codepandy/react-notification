const path = require("path");

const config = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        use: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css|less$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true, importLoaders: 2 } },
          {
            loader: "postcss-loader",
          },
          
          { loader: "less-loader" },
          
          
        ],
      },
    ],
  },
};

module.exports = config;
