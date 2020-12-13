<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="Hello There"
      previewText="This is my first post"
      thumbnail="https://images.unsplash.com/photo-1607669948575-4fd36b53e45e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="Hello There 2"
      previewText="This is my first post 2"
      thumbnail="https://images.unsplash.com/photo-1607669948575-4fd36b53e45e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      title="Hello There 3"
      previewText="This is my first post 3"
      thumbnail="https://images.unsplash.com/photo-1607669948575-4fd36b53e45e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  components: {
    PostPreview
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
