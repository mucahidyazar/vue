<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/proudcts/p2">Product 2</router-link>
  </section>
</template>

<script>
import { inject, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  props: ['pid'],
  setup(props) {
    const products = inject('products');
    // const title = ref('');
    // const price = ref(null);
    // const description = ref('');

    const route = useRoute();
    const router = useRouter();
    console.log(route);
    console.log(router);

    const selectedProducts = computed(
      products.value.find(product => product.id === props.pid)
    );
    const title = computed(() => selectedProducts.value.title);
    const price = computed(() => selectedProducts.value.price);
    const description = computed(() => selectedProducts.value.description);

    return { title, price, description };
  }
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
