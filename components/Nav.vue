<template>
  <div class="page-header">

    <div></div>
    <div class="searchBarMain">
      <!-- <form method="get" action="/search"> -->
        <i class="material-icons searchBarSearchIcon">search</i>
        <input
        v-bind:value="query"
        v-on:input="searchUpdated($event.target.value)"
        type="text"
        name="q"
        id="searchBarInput"
        placeholder="Search, discover, explore...">
      <!-- </form> -->
    </div>
    <nav></nav>

  </div>
</template>
<script>
export default {
  name: 'Nav',
  props: [
    'query'
  ],
  methods: {
    searchUpdated: function (value) {
      this.$emit('input', value);
    }
  }
}
</script>

<style lang="css">
.page-header {
	width: 100%;
	width: 100%;
	position: fixed;
	background: #6472cd;
	top: 0;
	z-index: 500;
	height: 64px;
	max-height: 64px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}


.searchBarMain {
	background: #fff;
	width: 80%;
	max-width: 680px;
	margin: 0 auto;
	height: 42px;
	margin-top: 11px;
	border-radius: 2px;
	box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.14);
	-webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
	position: fixed;
	left: 0;
	right: 0;
	top: 0
}

.searchBarMain i.searchBarSearchIcon {
	height: 100%;
	line-height: 42px;
	float: left;
	width: 52px;
	text-align: center;
	color: rgba(68, 68, 68, 0.5);
}

.searchBarMain input#searchBarInput {
	height: 42px;
	padding: 0;
	margin: 0;
	border: 0;
	box-sizing: border-box;
	background: transparent;
	width: calc(100% - 52px);
	outline: none;
	padding-right: 32px;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.76);
	font-weight: 400;
	font-family: 'Roboto', sans-serif;
}

.searchBarMain i.clearSearchBarField {
	position: absolute;
	right: 12px;
	top: 11px;
	color: rgba(0, 0, 0, 0.84);
	display: none;
	font-size: 20px;
}

.searchBarMain i.clearSearchBarField:hover {
	cursor: pointer;
}
</style>
