<template>
<div>
  <h4>
    Name: <strong>{{ name }}</strong>
  </h4>
  <h4>
    Age: <strong>{{ age }}</strong>
  </h4>
</div>
</template>

<script>
export default {
  name: "ActiveUser",
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
