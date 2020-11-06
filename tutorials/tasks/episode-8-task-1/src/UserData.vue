<template>
<div>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" name="name" @input="setInput" />
  </div>
  <div class="form-group">
    <label for="age">Age</label>
    <input type="text" name="age" @input="setInput" />
  </div>
</div>
</template>

<script>
export default {
  name: "UserData",
  methods: {
    setInput(e) {
      this.$emit("set-input", e.target.name, e.target.value);
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
