<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
import UserAlert from '../components/UserAlert.vue';
import alertMixin from '../mixins/alert';

export default {
  components: {
    UserAlert
  },
  data() {
    return {
      alertTitle: 'New User',
      alertIsVisible: true
    };
  },
  mixins: [alertMixin]
};
</script>
