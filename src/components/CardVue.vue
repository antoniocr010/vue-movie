<template>
  <v-hover v-slot="{ hover }" open-delay="100">
    <div class="v-full">
      <v-card
        id="card-movie"
        :elevation="hover ? 16 : 2"
        :class="{ 'on-hover': hover }"
      >
        <router-link :to="`/movie/${movie.id}`">
          <v-img id="img" :src="posterPath"></v-img>
        </router-link>
        <v-card-title class="subtitle-2">{{ movie.title }}</v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="movie.vote_average / 2"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            >
            </v-rating>
            <div class="grey--text ml-3">
              {{ movie.vote_average * 10 }} % | {{ movie.release_date }}
            </div>
          </v-row>
          <div class="my-3 subtitle-2 none">
            <span v-for="(genre, index) in movie.genre_ids" :key="genre">
              {{ genreTypeName(genre, index) }}
            </span>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-hover>
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
    },
    genres: {
      required: true,
    },
  },
  computed: {
    posterPath() {
      return 'https://image.tmdb.org/t/p/w200' + this.movie.poster_path;
    },
  },
  methods: {
    genreTypeName(genraId, index) {
      for (const item of this.genres) {
        if (item.id == genraId) {
          if (this.movie.genre_ids.length - 1 == index) {
            return item.name;
          } else {
            return item.name + ',';
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-full {
  max-width: 190px;
  height: 458px;
  margin: 0 auto;

  transition: 0.1s;
  &:hover {
    transform: scale(1.06);
  }
  #card-movie {
    border-radius: 15px !important;
    height: 100%;

    #img {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
  }
}

@media only screen and (max-width: 790px) {
  .v-full {
    max-width: 150px;
    height: 450px;
  }
}
@media only screen and (max-width: 699px) {
  .v-full {
    max-width: 148px;
    height: 435px;
  }
}
@media only screen and (max-width: 539px) {
  .v-full {
    max-width: 148px;
    height: 435px;
    .none {
      display: none !important;
    }
  }
}
@media only screen and (max-width: 470px) {
  .v-full {
    max-width: 148px;
    height: 375px;
  }
}
@media only screen and (max-width: 399px) {
  .v-full {
    max-width: 148px;
    height: 375px;
  }
}
</style>
