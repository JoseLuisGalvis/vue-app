<template>
  <div id="app">
    <NavBarComponent />
    <BodyComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';
import BodyComponent from './components/BodyComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    NavBarComponent,
    BodyComponent,
    FooterComponent,
  },
};
</script>

<style>
body {
  background-color: #000050;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>