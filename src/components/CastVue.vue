<template>
  <div class="v-full">
    <h2 class="mt-2 grey--text">Cast</h2>
    <v-container class="ct-full">
      <v-col id="c-full" :key="inedx" v-for="(cast, inedx) in casts">
      <v-hover v-slot="{ hover }" open-delay="100">
        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
          <v-img id="img-cast" :src="castProfileImage(cast)" />
          <v-card-title class="subtitle-2">{{ cast.name }}</v-card-title>
        </v-card>
      </v-hover>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    casts: {
      required: true,
    },
  },
  methods: {
    castProfileImage(cast) {
      if (cast.profile_path) {
        return 'https://image.tmdb.org/t/p/w200/' + cast.profile_path;
      } else {
        return 'https://image.tmdb.org/t/p/w200/';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-full {
  max-width: 1440px;
  margin: 0 auto;
  .ct-full {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    #c-full {
      border-radius: 30px !important;
      transition: 0.1s;
      max-width: 160px;

      &:hover {
        transform: scale(1.07);
      }
      .v-card {
        border-radius: 25px !important;
      }
    }
  }
}
</style>
