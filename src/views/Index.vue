<script>
import search from '../components/Search.vue'
import pokeList from '../components/Pokelist.vue'

export default {
  components: {
    search,
    pokeList
  },
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    updateSearchTerm(value) {
      this.searchTerm = value;
    }
  }
};

</script>

<template>
  <main class="l-main">
    <search @searched="updateSearchTerm" />
    <pokeList :searchTerm="searchTerm" />
  </main>
</template>

<style>
  .l-main {
    padding-top: 80px;
  }
</style>
