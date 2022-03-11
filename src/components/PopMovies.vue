<template>
  <div>
    <MovieHeader />
    <div id="cards-f" class="mx-2">
      <h2 class="mt-2 grey--text">Top Trends</h2>
      <v-container id="card-t" fluid>
        <v-row>
          <v-col v-for="movie in movies" :key="movie.id">
            <CardVue :movie="movie" :genres="genres" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import MovieHeader from '../components/MovieHeader.vue';
import CardVue from '../components/CardVue.vue';
export default {
  components: {
    CardVue,
    MovieHeader,
  },
  data() {
    return {
      movies: [],
      genres: [],
    };
  },
  async mounted() {
    this.fetchGenres();
    try {
      const respo = await this.$http.get(
        '/movie/popular?&api_key=6a5770b7d10a67d6445671f4b836afaa'
      );
      this.movies = respo.data.results;
    } catch (erro) {
      console.log(erro);
    }
  },
  methods: {
    async fetchGenres() {
      try {
        const resp = await this.$http.get(
          '/genre/movie/list?&api_key=6a5770b7d10a67d6445671f4b836afaa'
        );
        this.genres = resp.data.genres;
      } catch (erro) {
        console.log(erro);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#cards-f {
  .mt-2 {
    max-width: 1440px;
    margin: 0 auto;
  }

  #card-t {
    max-width: 1440px;
  }
}
</style>
