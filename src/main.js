import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router.js'

//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//接口错误拦截
axios.interceptors.response.use(function (response){
  let res = response.data;
  if(res.status == 0){//接口成功返回的状态值为 0
    return res.data
  }else if(res.status == 10){//未登录接口返回的状态值为 10
    window.location.href = '/#/login'
  }else{
    alert(res.msg);
  }
})

Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
