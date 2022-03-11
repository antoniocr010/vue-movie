<template>
  <div>
    <div
      class="nextReleasesContainer"
      v-for="(movie, id) in movies"
      :key="id"
      :index="id"
    >
      <div class="videoContainer">
        <video autoplay muted loop object-fit :src="movie.src"></video>
      </div>

      <div class="containerReleases">
        <h1>{{ movie.name }}</h1>
        <p>
          {{ movie.text }}
        </p>
        <button id="buttonPlay">
          <v-icon name="play" scale="1" id="iconMain" />
          <span>Assistir</span>
        </button>
        <button id="buttonInfo">
          <v-icon name="info-circle" scale="1"  id="iconMain" />
          <span>Mais informações</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
export default {
  data() {
    return {
      movies: [
        {
          name: 'Homem-Aranha: Sem Volta para Casa',
          src: require('../assets/movie.mp4'),
          text: 'O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta.',
        },
      ],
    };
  },

  components: {
    'v-icon': Icon,
  },
};
</script>
<style scoped>
.nextReleasesContainer {
  max-width: 1440px;
  height: 450px;
  position: relative;
  background: #111;
  display: flex;
  align-items: center;
  z-index: 1;
  margin: 0 auto;
}
.nextReleasesContainer > .videoContainer {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.nextReleasesContainer > .videoContainer > video {
  width: 100%;
  justify-content: center;
  object-fit: cover;
  width: 100%;
  height: 100%;
  align-items: center;
}

.containerReleases {
  width: 500px;
  margin-left: 40px;
}
.containerReleases h1 {
  color: #ffffff;
  text-shadow: black 0.1em 0.1em 0.2em;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 30px;

  position: relative;
}
.containerReleases p {
  color: #e9e9e9;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: #e9e9e9 0em 0em 0em;
  font-size: 16px;
  margin-bottom: 30px;
  font-weight: 500;
  text-align: justify;
}
.containerReleases button {
  border: none;
  background: #42b883;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  transition: transform 0.5s;
  border-radius: 5px;
}
.containerReleases button:hover {
  border: none;
  background: #ff0000;

  transform: scale(1.1);
  cursor: pointer;
}
.containerReleases button span {
  padding-left: 10px;
}
#buttonPlay {
  width: 150px;
  height: 30px;
  margin-right: 20px;
}
#buttonInfo {
  width: 190px;
  height: 30px;
}
@media only screen and (max-width: 900px) {
  .nextReleasesContainer {
    height: 42vh;
  }
}
@media only screen and (max-width: 790px) {
  .containerReleases h1 {
    font-size: 40px;
  }
}
@media only screen and (max-width: 699px) {
  .nextReleasesContainer {
    height: 40vh;
  }
  .containerReleases p {
    font-size: 13px;
  }
}
@media only screen and (max-width: 599px) {
  .containerReleases {
    width: 400px;
  }
  .containerReleases p {
    font-size: 13px;
  }
  #buttonPlay {
    width: 120px;
  }
  #buttonInfo {
    width: 170px;
  }
}
@media only screen and (max-width: 470px) {
  .containerReleases {
    width: 350px;
    margin-left: 20px;
  }
  .containerReleases h1 {
    font-size: 30px;
  }
  .containerReleases p {
    font-size: 11px;
  }
  #buttonPlay {
    font-size: 12px;
  }
  #buttonInfo {
    font-size: 12px;
  }
  .nextReleasesContainer {
    height: 33vh;
  }
}
@media only screen and (max-width: 399px) {
  .containerReleases {
    width: 270px;
  }
  .containerReleases h1 {
    font-size: 17px;
  }
  .containerReleases p {
    font-size: 8px;
  }
  .nextReleasesContainer {
    height: 30vh;
  }
  button span {
    padding-bottom: 300px;
  }
  #buttonPlay {
    font-size: 7px;
    width: 75px;
  }
  #buttonInfo {
    font-size: 7px;
    width: 93px;
  }
}
</style>
