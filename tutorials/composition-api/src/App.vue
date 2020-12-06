<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <div>
      <input type="text" placeholder="Name" ref="nameInput" />
      <button @click="setName">Set Name</button>
    </div>
  </section>
</template>

<script>
import { ref, provide } from 'vue';
import UserData from './components/UserData';

export default {
  components: {
    UserData
  },
  setup() {
    const name = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const age = ref(29);

    provide('userAge', age);

    const nameInput = ref(null);
    function setName() {
      name.value = nameInput.value.value;
    }

    return {
      name,
      setName,
      nameInput,
      firstName,
      lastName
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
