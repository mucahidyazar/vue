<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3>COURSE GOALS</h3>
  <ul v-if="isVisible">
    <li v-for="goal in goals" :key="goal">{{ goal }}</li>
  </ul>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="setVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const goals = ref(['First goal', 'Second goal']);

    let isVisible = ref(false);

    function setVisibility() {
      isVisible.value = !isVisible.value;
    }

    return { goals, isVisible, setVisibility };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
