<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import jsonp from 'jsonp'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    //通过CORS跨域
    this.$axios.get('https://www.easy-mock.com/mock/5b012c1fe6e1035843cd3aff/mockapi/table/list').then({

    })
    //通过jsonp跨域
    jsonp('https://www.imooc.com/common/adver-getadver',(err,res)=>{
      console.log(res)
    })
    //通过接口代理跨域
    jsonp('/api/activity/servicetime',(err,res)=>{
      console.log(res)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
