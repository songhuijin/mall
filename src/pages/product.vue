<template>
  <div>
    <ProductParam>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </ProductParam>
    
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