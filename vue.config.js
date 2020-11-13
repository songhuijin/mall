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
  productionSourceMap:false,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');//删除预加载
  }
}