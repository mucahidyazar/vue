<template>
  <ul>
    <LearningResouce
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :slug="res.slug"
      :link="res.link"
    ></LearningResouce>
  </ul>
</template>

<script>
import LearningResouce from '../LearningResource';

export default {
  components: {
    LearningResouce
  },
  inject: ['resources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
