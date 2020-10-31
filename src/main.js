import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
// import Vuex from 'vuex'
import router from './router.js'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import env from './env'


//本地集成mockjs实现数据mock
const mock = false
if(mock){
  require('./mock/api')
}




//根据前端的跨域方式做调整
// axios.defaults.baseURL = '/api';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function (response){
  let res = response.data;
  let path = location.hash;
  if(res.status == 0){//接口成功返回的状态值为 0
    return res.data
  }else if(res.status == 10){//未登录接口返回的状态值为 10
    if (path!=='#/index'){
      window.location.href = '/#/login'
    }
    return Promise.reject(res);
  }else{
    // alert(res.msg);
    Message.warning(res.msg)
    return Promise.reject(res);
  }
})

Vue.use(VueRouter)
// Vue.use(Vuex)
Vue.use(VueCookie)
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})

// Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$Message = Message




new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
