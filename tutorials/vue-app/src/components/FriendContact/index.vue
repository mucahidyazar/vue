<template>
<li>
  <header>
    <h1>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h1>
  </header>
  <button @click="toggleFavorite">
    Toggle Favorite
  </button>
  <button @click="detailsAreVisible = !detailsAreVisible">
    Show Details
  </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone :</strong> {{ phone }}</li>
    <li><strong>Email :</strong> {{ email }}</li>
  </ul>
  <button @click="deleteFriend">Delete</button>
</li>
</template>

<script>
export default {
  name: "FriendContact",
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: String,
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
      // validator(value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  emits: ["toggle-favorite", "delete-friend"],
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id === 1 || id === 0) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
};
</script>
