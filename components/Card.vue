<template lang="">
  <div class="card-container">
    <div class="card-wrap col-half mx-auto">
        <div class="card" v-for="item in items">
          <NuxtLink
          :to="{ name: 'tv-show', params: { show: item.id } }">
            <div class="image">
              <img v-if="item.poster_path" :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`">
              <img v-else src="https://via.placeholder.com/170x255">
            </div>
            <div class="info">
              <h3>{{ item.name }}</h3>
              <div>{{ item.first_air_date }}</div>
              <div>{{ item.vote_average }}</div>
            </div>
          </NuxtLink>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['items'],
}
</script>
<style lang="scss">
.card-container{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
}
.card-wrap{
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .card{
    min-width: 170px;
    background-color: #f3f0f8;
    justify-content: flex-start;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: inherit;
    width: 170px;
    position: relative;
    margin: 0 10px 20px;
    border-radius: 5px;

    img{
      margin-right: 0;
      border: 0;
      height: auto;
      max-width: 100%;
      vertical-align: middle;
    }

    .info{
      padding: 15px 10px 10px;
      div{
        font-weight: 400;
        font-size: 14px;
      }
    }

    a{
      color: #000;
    }
  }
}
</style>
