<template>
  <div id="example">
    <h2 class="mx-3 grey--text">Upcoming Movies</h2>
    <carousel-3d
      :controls-visible="true"
      :clickable="false"
      :key="upcomingMovies.length"
      :listData="upcomingMovies"
      :height="450"
      :autoplay="true"
      :autoplay-timeout="2000"
    >
      <slide :index="i" :key="i" v-for="(movie, i) in this.upcomingMovies">
        <figure>
          <img :src="'https://image.tmdb.org/t/p/w400/' + movie.poster_path" />
          <figcaption>
            <v-btn :to="`/movie/${movie.id}`" text color="white">
              {{ movie.title }}</v-btn
            >
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  data() {
    return {
      upcomingMovies: [],
    };
  },
  components: {
    Carousel3d,
    Slide,
  },
  mounted() {
    this.fetchUpcomingMovies();
  },
  methods: {
    async fetchUpcomingMovies() {
      const response = await this.$http.get(
        'https://api.themoviedb.org/3/movie/upcoming?&api_key=6a5770b7d10a67d6445671f4b836afaa'
      );

      this.upcomingMovies = response.data.results.slice(1, 6);
      console.log(this.upcomingMovies);
    },
  },
};
</script>

<style lang="scss" scoped>
#example {
  max-width: 1440px;
  margin: auto;

  .carousel-3d-container figure {
    margin: 0;
    max-width: 1440px;
    margin: auto;
  }

  .carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 15px;
    font-size: 14px;
    font-weight: 700;
    min-width: 100%;
    box-sizing: border-box;
  }
  .next span,
  .prev span {
    color: rgb(56, 56, 56);
  }
}
</style>
