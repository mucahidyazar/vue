<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './views/layouts/TheHeader';

export default {
  components: {
    TheHeader
  },
  created() {
    this.$store.dispatch('autoLogin');
  },
  computed: {
    didAutoSignout() {
      return this.$store.getters.didAutoSignout;
    }
  },
  watch: {
    didAutoSignout(currentValue, oldValue) {
      if (currentValue && currentValue !== oldValue) {
        this.$router.replace('/couches');
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.route-leave-from,
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
