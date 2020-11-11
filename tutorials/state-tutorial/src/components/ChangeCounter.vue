<template>
  <button @click="increment">Increment</button>
  <button @click="increase({ value: 10 })">Increase</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // }
    ...mapActions('numbers', ['increment', 'increase'])
    // ...mapActions({
    //   increment: 'increment',
    //   increase: 'increase'
    // })
  }
};
</script>
