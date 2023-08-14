<template>
  <li class="pokemon-item">
    <div class="pokemon-item__inner">
      <p>{{ pokemon.japaneseName }}</p>
      <img :src="pokemon.image" :alt="pokemon.japaneseName" />
      <button 
        @click="toggleFavorite" 
        :class="{ 'is-active': isFavorited }"
        v-html="favoriteButtonText">
      </button>
    </div>
  </li>
</template>

<script>

export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    },
    isFavoritePage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isFavorited() {
      return this.$store.state.favorites.some(fav => fav.name === this.pokemon.name);
    },
    favoriteButtonText() {
    if (this.isFavoritePage) {
      return 'お気に入りからはずす';
    }
    return this.isFavorited ? 'お気に入り' : 'お気に入りに<br>追加する';
  }
  },
  methods: {
    toggleFavorite() {
      this.$store.commit('toggleFavorite', this.pokemon);
    }
  },
};
</script>


<style>
.pokemon-item {
  width: calc(100% / 6);
  padding: 0 20px;
  margin-top: 20px;
}
.pokemon-item:nth-child(-n + 6) {
  margin-top: 0;
}
.pokemon-item__inner {
  border: 1px solid white;
  border-radius: 4px;
  padding: 10px;
  color: white;
}
.pokemon-item p{
  text-align: center;
  
}

.pokemon-item img {
  width: 100%;
  margin: auto;
}

.pokemon-item button {
  background: white;
  border: 1px solid white;
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .3s;
}
.pokemon-item button:hover {
  opacity: 1;
  background:#f25c5c;
  color: white;
  border-color: #f25c5c;
  transition: .3s;
}
.pokemon-item button.is-active {
  background:#f25c5c;
  color: white;
  border-color: #f25c5c;
}
</style>
