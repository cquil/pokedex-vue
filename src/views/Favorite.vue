<template>
  <main class="l-main">

    <div v-if="favorites.length">
      <ul class="c-poke-list">
        <PokeItem v-for="pokemon in favorites" :pokemon="pokemon" :is-favorite-page="true" />
      </ul>
    </div>

    <div v-else>
      <p class="error-text">一覧からお気に入り登録しよう</p>
    </div>
    
  </main>
</template>

<script>
import { mapState } from 'vuex';
import PokeItem from "@/components/Pokeitem.vue";

export default {
  components: {
    PokeItem
  },
  computed: mapState(['favorites']),
  methods: {
    removeFromFavorites(pokemon) {
      this.$store.commit('toggleFavorite', pokemon);
    }
  }
};
</script>

<style>
.error-text {
  font-size: 30px;
  padding-top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  text-align: center;
}
</style>