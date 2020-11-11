<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      //do something
      this.$router.push('/teams');
      this.$router.back();
      this.$router.forward();
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  inject: ['users'],
  beforeRouteEnter(to, from, next) {
    console.log('UserList Component beforeRouteEnter');
    console.log(to, from, next);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UserList Component beforeRouteLeave');
    console.log(to, from, next);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure you got unsaved changes!');
      next(userWantsToLeave);
    }
  },
  unmounted() {},
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
