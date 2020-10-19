<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      res:{}
    }
  },
  mounted(){
    this.getUser();
    this.getCartCount();
  },
  methods:{
    getUser(){
      this.$axios.get('/user').then(()=>{
        //to-do,保存到vuex中
      })
    },
    getCartCount(){
       this.$axios.get('/carts/products/sum').then(()=>{
        //to-do
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
