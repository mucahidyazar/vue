<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">
        {{ error }}
      </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some experince.
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  props: [
    //'results'
  ],
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  components: {
    SurveyResult
  },
  methods: {
    async loadExperiences() {
      try {
        console.log(this.results);
        this.isLoading = true;
        this.error = null;
        const res = await axios.get(
          'https://vue-http-tutorial-api.firebaseio.com/surveys.json'
        );
        this.isLoading = false;
        for (let x in res.data) {
          this.results.push({
            id: x,
            name: x.name,
            rating: x.rating
          });
        }
        console.log(res);
      } catch (error) {
        this.isLoading = false;
        this.error = 'Failed to fetch data- please try again later.';
        console.log(error);
        console.log(error.message); //Network error
      }
    }
  },
  async mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
