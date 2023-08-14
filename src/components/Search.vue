<template>
  <div class="c-search">
    <p>なまえ検索</p>
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
  padding:0 20px 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.c-search p{
  color: white;
  font-style: 15px;
  margin-right: 10px;
}

.c-search input{
  height: 30px;
}
</style>
