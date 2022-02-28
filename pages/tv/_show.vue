<template lang="">

  <Preloader v-if="$fetchState.pending" />

  <div v-else class="tv-show">

    <div class="tv-show-bg" :style="{ backgroundImage: `url(${backdrop})` }"></div>

        <div class="tv-back">
          <NuxtLink class="button" :to="{ name: 'index' }">
            <i class="material-icons">arrow_back</i>
            <span>Back To Home</span>
          </NuxtLink>
        </div>
      <div class="tv-show-info">
        <div class="tv-show-img">
          <img :src="`${poster}`"/>
        </div>
        <div class="tv-info">
          <h1>{{ tvshow.name }}</h1>

          <p class="genres">
            <span v-for="genre in tvshow.genres">{{ genre.name }}</span>
          </p>

          <p class="date">
            Date: {{ tvshow.first_air_date }}
          </p>

          <p>Popularity:</p>
          <div class="popularity">
            <div class="progress" :style="{ width:progress, backgroundColor:progressColor   }"></div>
          </div>

          <div class="overview">
            <p>Overview: </p>
            {{ tvshow.overview }}
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'TvShow',

  async fetch() {
    await this.getTvShow()
  },

  data(){
    return {
      tvshow: [],
      backdrop: null,
      poster: null,
      progress: '0%',
      progressColor: '#e74c3c',
    }
  },

  methods: {
    async getTvShow() {
      let uri = `/tv/${this.$route.params.show}?api_key=${process.env.themoviedb_key}&language=en-US`;
      await this.$axios
      .get(uri)
      .then((res) => {
        this.tvshow = res.data;
        let bg_image = this.tvshow.backdrop_path || this.tvshow.poster_path;
        this.backdrop = bg_image ? `https://image.tmdb.org/t/p/w500${bg_image}` : 'https://via.placeholder.com/170x255';
        this.poster = this.tvshow.poster_path ? `https://image.tmdb.org/t/p/w500${this.tvshow.poster_path}` : 'https://via.placeholder.com/460x700';

        this.progress = this.tvshow.vote_average * 10 + "%";

        this.progressColor = this.tvshow.vote_average > 7 ? '#16a085'
                            : this.tvshow.vote_average > 5 ? '#e67e22'
                            : this.tvshow.vote_average > 3 ? '#c0392b'
                            : ''
      })
    }
  }

}
</script>
<style lang="scss">
.tv-show-bg {
  position: fixed;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  z-index: -1;
  filter: blur(10px);
  opacity: .3;
}
.tv-show {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .tv-back{
    width: 80%;
    flex-direction: row;
    align-items: flex-start;
  }
  .popularity{
    border-radius: 5px;
    background: #808e9b;
    .progress{
      border-radius: 5px;
      height: 4px;
    }
  }
  .overview{
    margin-bottom: 30px;
  }
  .button {
    display: inline-flex;
    vertical-align: top;
    margin: 20px 0 10px;
    padding: 8px 10px;
    span{
      line-height: 24px;
    }
  }
  .tv-show-info {
    height: 100vh;
    display: flex;
    gap: 32px;
    color: #fff;

    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    @media (min-width: 800px) {
      flex-direction: row;
      align-items: flex-start;
    }
    .tv-show-img {
      img {
        max-height: 500px;
        width: 100%;
        @media (min-width: 800px) {
          max-height: 700px;
          width: initial;
        }
      }
    }
    .tv-info {
      h1 {
        font-weight: 400;
        font-size: 40px;
      }
      p{
        margin-top:10px;
      }
      .genres {
        span{
          background: #B33771;
          border-radius: 5px;
          margin-right: 5px;
          padding: 0 5px;
        }
      }
    }
  }
}
</style>
