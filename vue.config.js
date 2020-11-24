module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        // "@": "src" 默认已经配置
      }
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: true, //配置自动启动浏览器
    // host: '127.0.0.1',
    host: '192.168.0.182',
    port: 2364, // 当前vue项目 端口号
    https: false,
    hotOnly: false, // https:{type:Boolean}
    // proxy: null, // 设置代理
    // proxy: 'http://123.206.33.109:8081',          // 配置跨域处理,只有一个代理
    proxy: {
      // 配置多个代理
      '/': {
        target: 'http://152.136.185.210:8000/api/w6', //这里改成你自己的后端api端口地址，记得每次修改，都需要重新build
        //target: "http://localhost:58427",
        //target: "http://api.douban.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 路径重写，
          '^/apb': '' // 替换target中的请求地址
        }
      },
      '/images': {
        target: 'http://localhost:8081',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
