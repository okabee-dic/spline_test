/** ↓ エディタで補完を効かせるための JSDoc */
/** @type {import('webpack').Configuration} */

//MiniCssExtractPlugin の読み込み
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [{
      // 拡張子 js のファイル（正規表現）
      test: /\.js$/,
      // ローダーの指定
      loader: "babel-loader",
    }, 
    {
      //拡張子 .scss、.sass、css を対象
      test: /\.(scss|sass|css)$/i, 
      // 使用するローダーの指定（後ろから順番に適用される）
      use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ], 
    },
    ],  
  },

  plugins: [
    new MiniCssExtractPlugin({
      // 抽出する CSS のファイル名
      filename: 'style.css',
    }),
  ],
};

// 設定を CommnJS 形式でエクスポート
module.exports = config;