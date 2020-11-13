module.exports = {
  devServer:{
    host:"localhost",
    port:8080,
    proxy:{//事件代理
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  lintOnSave: false,
  productionSourceMap:false
}