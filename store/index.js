import { createStore } from 'vuex';

const store = createStore({
  state: {
    pokemons: [],
    currentRegion: '',
    // Initialize favorites from sessionStorage
    favorites: JSON.parse(sessionStorage.getItem('favorites') || '[]')
  },
  mutations: {
    toggleFavorite(state, pokemon) {
      const index = state.favorites.findIndex(fav => fav.name === pokemon.name);
      if (index === -1) {
        state.favorites.push(pokemon);
      } else {
        state.favorites.splice(index, 1);
      }
      // Update the sessionStorage when favorites changes
      sessionStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    setCurrentRegion(state, region) {
      state.currentRegion = region;
    },
    // New mutation to set the favorites
    setFavorites(state, favorites) {
      state.favorites = favorites;
      // Update the sessionStorage as well
      sessionStorage.setItem('favorites', JSON.stringify(favorites));
    },
  },
  actions: {
  },
});

export default store;
