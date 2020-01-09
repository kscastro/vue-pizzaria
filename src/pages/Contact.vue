<template>
  <div>
    <contact-component></contact-component>
  </div>
</template>
<script>
import ContactComponent from '../components/Contact';
export default {
  name: 'ContactPage',
  components: {
    'contact-component': ContactComponent
  }
}
</script>