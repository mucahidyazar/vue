<template>
  <button @click="inc">Increment</button>
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    function inc() {}

    const store = useStore();
    console.log(store);

    return { inc };
  }
};
</script>
