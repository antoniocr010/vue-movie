<template>
  <nav id="nav">
    <v-app-bar id="bar" app color="#111" dense darky>
      <v-icon class="mr-1" style="color: #42b883">fa-brands fa-vuejs</v-icon>
      <span @click="toHome">TMDB</span>
      <v-btn text class="ml-2 c-btn" @click="toHome">Home</v-btn>
      <v-btn text class="ml-2 c-btn">Movies</v-btn>
      <v-btn text class="ml-2 c-btn">Series</v-btn>
      <v-btn text class="ml-2 c-btn" @click="MyList">MyList</v-btn>

      <v-autocomplete
        id="auto"
        clearable
        hide-no-data
        hide-selected
        color="black"
        prepend-inner-icon="search"
        flat
        placeholder="Search"
        class="ml-12"
        :items="movies"
        item-text="title"
        item-value="id"
      >
        <template v-slot:item="{ item }">
          <v-btn text :to="`/movie/${item.id}`">{{ item.title }}</v-btn>
        </template>
      </v-autocomplete>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        id="ico"
        color="#fff"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title @click="toHome">Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Movies</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Series</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title @click="MyList">myList</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <br />
      <v-btn icon>
        <v-badge
          class="mr-3"
          content="1"
          color="green"
          overlay
          offset-x="9"
          offset-y="10"
        >
          <v-icon color="#fff">far fa-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn icon>
        <v-badge top color="green" dot offset-x="5" offset-y="5">
          <v-avatar style="border-radius: 10px" size="30">
            <img src="../assets/avatar.png" alt="" />
          </v-avatar> </v-badge
      ></v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      model: '',
      search: null,
      movies: [],
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    MyList() {
      this.$router.push({ name: 'mylist' });
    },
    toHome() {
      this.$router.push({ name: 'home' });
    },
    loadMovies: async function () {
      try {
        const key = '?&api_key=6a5770b7d10a67d6445671f4b836afaa';
        const response = await this.$http.get('/movie/popular' + key);
        this.movies = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.loadMovies();
  },
};
</script>

<style lang="scss">
#nav {
  #bar {
    text-transform: uppercase;
    color: #fff;
    max-width: 1440px;
    padding: 0px 6px 0px 6px;
    margin: 0 auto;
    span {
      cursor: pointer;
    }
    .c-btn {
      color: #fff;
      text-transform: uppercase;
    }
    #ico {
      display: none;
    }
  }
  .v-input {
    margin: 0;
    padding: 0;

    .v-input__control {
      height: 30px;

      .v-input__slot {
        background-color: #fff9ff;
        margin-bottom: 0;
        border-radius: 6px;

        #auto {
          padding: 3px 0 3px;
        }
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  #nav {
    #bar {
      .c-btn {
        display: none;
      }
      #ico {
        display: block;
      }
    }
    .v-input {
      display: none;
    }
  }
}
</style>
