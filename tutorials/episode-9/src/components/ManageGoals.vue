<template>
<div>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <!--
  <teleport to="body">
  <teleport to="#app">
  <teleport to=".homePage">
  -->
  <teleport to="#app">
    <error-alert v-if="isInputValid">
      <template v-slot:default>
        <h2>Input is invalid</h2>
        <p>Please enter at least a few characters</p>
        <button @click="confirmError">Okey</button>
      </template>
    </error-alert>
  </teleport>
</div>
</template>

<script>
import ErrorAlert from "./ErrorAlert";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      isInputValid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.isInputValid = true;
      }
    },
    confirmError() {
      this.isInputValid = false;
    },
  },
};
</script>
