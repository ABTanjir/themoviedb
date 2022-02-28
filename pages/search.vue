<template lang="">
  <div>
    <Nav :query="query" @input="fetchResult"/>

    <Preloader v-if="$fetchState.pending" />
    <Card v-else :items="showList"/>
  </div>
</template>
<script>

export default {
  name: 'SearchPage',

  head(){
    return {
      title: `Search - ${this.query }`
    }
  },

  async fetch() {
    await this.fetchResult(this.$route.query.q)
  },

  methods: {
    async fetchResult(query) {
      this.query = query
      console.log("IN", query)
      let uri = `/search/tv?api_key=${process.env.themoviedb_key}&language=en-US&page=1&query=${query}`;
      await this.$axios
      .get(uri)
      .then((res) => {
        this.showList = res.data.results
      })
    }
  },

  data() {
    return {
      query: this.$route.query.q,
      showList: []
    };
  },

}
</script>
