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
import useAlert from '../hooks/alert';
import UserAlert from './UserAlert.vue';
import { ref } from 'vue';

export default {
  components: {
    UserAlert
  },
  setup() {
    const alertTitle = ref('Remove User');
    const { alertIsVisible, showAlert, hideAlert } = useAlert(true);
    return {
      alertIsVisible,
      showAlert,
      hideAlert,
      alertTitle
    };
  }
};
</script>
