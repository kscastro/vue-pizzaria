<template>
  <div>
    <product-component></product-component>
  </div>
</template>
<script>
import ProductComponent from '../components/Product';
export default {
  name: 'ProductPage',
  components:{
    'product-component': ProductComponent
  }
}
</script>
<style lang="stylus">
  
</style>