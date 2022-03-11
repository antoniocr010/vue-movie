<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <NavBar />
    <FooterVue />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterVue from './components/FooterVue.vue';

export default {
  components: {
    NavBar,
    FooterVue,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
