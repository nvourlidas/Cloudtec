const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  }
})
