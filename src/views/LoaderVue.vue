<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      ><v-icon style="color: #42b883">fa-brands fa-vuejs</v-icon>
      <SpinerVue />
    </div>
  </transition>
</template>

<script>
import SpinerVue from '../components/SpinerVue';

export default {
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    if (this.show) this.showToggle();
  },
  components: {
    SpinerVue,
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
        this.$router.push('/home');
      }, 2500);
    },
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #111;
  z-index: 1000;
  .v-icon {
    font-size: 100px !important;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
