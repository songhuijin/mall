module.exports = {
  devServer:{
    host:"localhost",
    port:8080,
    proxy:{//事件代理
      '/api':{
        target:'https://www.imooc.com',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
}