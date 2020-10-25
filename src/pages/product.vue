<template>
  <div class="product">
    <ProductParam>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </ProductParam>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
  </div>
</template>
<script>
import ProductParam from '../components/ProductParam'
export default {
  name:'product',
  components:{
    ProductParam
  }
}
</script>
<style scoped lang="scss">
.product{
  .h{
    height: 150px;
  }
}
</style>