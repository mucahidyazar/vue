<template>
  <h2>{{ name }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';
export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const name = computed(function() {
      return props.firstName + props.lastName;
    });

    const age = inject('userAge');

    // this.$emit('save-data', 1);
    context.emit('save-data', 1);

    onBeforeMount(function() {
      console.log('on before mount');
    });
    onMounted(function() {
      console.log('on mounted');
    });

    onBeforeUpdate(function() {
      console.log('on before update');
    });
    onUpdated(function() {
      console.log('on updated');
    });

    onBeforeUnmount(function() {
      console.log('on before unmount');
    });
    onUnmounted(function() {
      console.log('on unmounted');
    });

    return { name, age };
  }
};
</script>
