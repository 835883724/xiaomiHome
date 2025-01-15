const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true,
  devServer: {
    hot: true, // 开启热更新
    port: 8080 // 设置端口号
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@vue/babel-plugin-jsx']
            }
          }
        }
      ]
    }
  }
})


