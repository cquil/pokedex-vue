// store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    pokemons: [],
    currentRegion: '',
    favorites: []
  },
  mutations: {
    toggleFavorite(state, pokemon) {
      const index = state.favorites.findIndex(fav => fav.name === pokemon.name);
      if (index === -1) {
        state.favorites.push(pokemon);
      } else {
        state.favorites.splice(index, 1);
      }
    },
    setCurrentRegion(state, region) {
      state.currentRegion = region;
    },
  },
  actions: {
  },
});

export default store;
