<template>
<div>
  <h2>Episode 8 Task 1</h2>
  <UserData @setInput="handlerSetInput" :name="name" :age="age" />
  <ActiveUser :name="name" :age="age" />
</div>
</template>

<script>
import ActiveUser from "./ActiveUser";
import UserData from "./UserData";

export default {
  name: "App",
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  methods: {
    handlerSetInput(name, value) {
      if (name === "age") {
        return (this[name] = +value);
      }
      this[name] = value;
    },
  },
  components: {
    ActiveUser,
    UserData,
  },
};
</script>
