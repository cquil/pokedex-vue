<template>
  <div class="c-search">
    <input v-model="searchTerm" @input="onInput" placeholder="ポケモン名を入力...">
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    onInput() {
      this.$emit("searched", this.searchTerm);
    }
  }
};
</script>

<style>
.c-search {
  padding-bottom: 40px;
}
</style>
