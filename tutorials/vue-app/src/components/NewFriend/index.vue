<template>
<form @submit.prevent="submitData">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" v-model="enteredName" />
  </div>
  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="tel" v-model="enteredPhone" />
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" v-model="enteredEmail" />
  </div>
  <div class="form-group">
    <button>Add Contact</button>
  </div>
</form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
  emits: ["add-contact"],
};
</script>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}
</style>
