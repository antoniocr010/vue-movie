<template>
  <div id="myListContainer">
    <div id="myListContent">
      <div
        :key="movie.id"
        v-for="movie in this.$store.state.list"
        id="moviesSaved"
      >
        <div id="normalColorImage">
          <img
            :src="`https://image.tmdb.org/t/p/w200/` + movie.poster_path"
            id="movieSaveImage"
          />
        </div>
        <div id="buttonsMyList">
          <v-btn
            color="error"
            text
            @click="$store.commit('removeData', movie), showTpad()"
            id="markToRemove"
            >to remove</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyList',
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    showTpad() {
      window.Toast.fire('Removed', 'Successfully removed!', 'success');
    },
  },
};
</script>

<style>
#myListContainer {
  display: flex;
  max-width: 1440px;
  margin: auto;
}
#myListContent {
  display: flex;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 30px;
}
#moviesSaved {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  max-height: 300px;
  margin: 26px;

  transition: 0.5s;
  cursor: pointer;
}

#moviesSaved:hover {
  transform: scale(1.05);
}
#buttonsMyList {
  display: flex;
}
#buttonsMyList button {
  border: none;
  background: rgb(44, 44, 44);
  font-size: 15px;
  text-align: center;
  transition: transform 0.5s;
  height: 30px;
}
#buttonsMyList button:hover {
  border: none;
  background: rgba(197, 197, 197, 0.26);
  transform: scale(1.1);
  cursor: pointer;
}
@media only screen and (max-width: 730px) {
  #myListContent {
    display: flex;
  }
}
@media only screen and (max-width: 600px) {
  #myListContent {
    margin: 0 auto;
    margin-bottom: 15px;
  }
}
</style>
