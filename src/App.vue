<template>
<div>
  <header-component />
  <router-view />
</div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'app',
  components: {
   'header-component': Header
  }
}
</script>
//Usa o Styled Component para começar vai ter ajudar muito
<style>
#app, html, body {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
</style>
