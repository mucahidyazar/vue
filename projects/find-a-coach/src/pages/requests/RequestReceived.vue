<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="!hasRequests">
        <request-item
          v-for="request in receivedRequests"
          :key="request.id"
          :message="request.message"
          :email="request.email"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../views/components/requests/RequestItem';

export default {
  components: {
    RequestItem
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['request/requests'];
    },
    hasRequests() {
      return this.$store.getters['request/hasRequest'];
    }
  },
  mounted() {
    console.log('this');
    console.log(this.$store.getters['request/requests']);
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
