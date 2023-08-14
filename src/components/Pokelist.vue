<template>
  <div class="wrapper">
    <ul class="c-poke-list">
      <!-- <PokeItem v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" /> -->
      <PokeItem v-for="pokemon in filteredPokemons" :key="pokemon.name" :pokemon="pokemon" />
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import PokeItem from "@/components/Pokeitem.vue";

export default {
  components: {
    PokeItem
  },
  props: {
    searchTerm: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      pokemons: [],
      apiUrl: "https://pokeapi.co/api/v2/pokemon?limit=151"
    };
  },
  methods: {
    getPokemonFromCache() {
      return JSON.parse(localStorage.getItem('pokemons'));
    },
    savePokemonToCache(pokemons) {
      localStorage.setItem('pokemons', JSON.stringify(pokemons));
    },
    hiraganaToKatakana(hira) {
      return hira.replace(/[\u3041-\u3096]/g, function(match) {
        var chr = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(chr);
      });
    },
    async getJapaneseName(pokemonUrl) {
      try {
        const response = await axios.get(pokemonUrl);
        const speciesData = await axios.get(response.data.species.url);
        const japaneseNameEntry = speciesData.data.names.find(entry => entry.language.name === "ja-Hrkt");
        return japaneseNameEntry ? japaneseNameEntry.name : response.data.name;
      } catch (error) {
        console.error("Failed to fetch Pokemon data:", error);
        return "";
      }
    }
  },

  computed: {
    filteredPokemons() {
      let katakanaSearchTerm = this.hiraganaToKatakana(this.searchTerm);
      return this.pokemons.filter(pokemon => pokemon.japaneseName.includes(katakanaSearchTerm));
    }
  },
  
  created() {
  const fetchPokemon = async () => {
    try {
      // キャッシュからデータを取得します。
      const cachedPokemons = this.getPokemonFromCache();
      
      // キャッシュにデータがある場合、それを使用します。
      if (cachedPokemons) {
        this.pokemons = cachedPokemons;
        return;
      }

      const countResponse = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const totalCount = 1010;
      console.log(totalCount)
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${totalCount}`);
      const promises = response.data.results.map(async (poke, index) => {
        const japaneseName = await this.getJapaneseName(poke.url);
        return {
          name: poke.name,
          japaneseName,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        };
      });
      this.pokemons = await Promise.all(promises);
      this.savePokemonToCache(this.pokemons);
    } catch (error) {
      false
    }
  };

  fetchPokemon();

  
}

};

</script>

<style>
.c-poke-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

.wrapper {
  min-height: 100vh;
}



</style>
