// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  devServer: {
    proxy: {
      '/dapi': {
        target: 'http://www.lpv4.cn:10000',
        changeOrigin: true,
        pathRewrite: {
          '^/dapi': ''
        }
      }
    }
  }
}