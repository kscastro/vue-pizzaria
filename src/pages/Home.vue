<template>
  <div> 
  <home-component></home-component>  
  </div>
</template>
<script>
import HomeComponent from '../components/Home.vue'
export default {
  name: 'HomePage',
  components: {
    'home-component': HomeComponent
  }
}
</script>
<style lang="stylus">

</style>