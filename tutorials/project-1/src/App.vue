<template>
  <TheHeader title="RememberMe" />
  <TheResources />
</template>

<script>
import TheHeader from './views/layouts/TheHeader';
import TheResources from './views/components/LearningResources/TheResources';

export default {
  components: {
    TheHeader,
    TheResources
  },
  data() {
    return {};
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
</style>
