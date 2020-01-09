<template>
  <div>
    <about-component></about-component>
  </div>
</template>
<script>
import AboutComponent from '../components/About.vue'
export default {
  name: 'AboutPage',
  components:{
    'about-component': AboutComponent
  }
}
</script>