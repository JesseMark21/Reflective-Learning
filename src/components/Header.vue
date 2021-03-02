<template>
	<header>
		<h1> {{title}} </h1>
	</header>
</template>

<script>
	export default {
    data(){
      return{
        title: 'My Favourite Memes'

      }
    }
  }
</script>
<style>
	header {
		font-family: Lato, sans-serif;
		background: #b5b5b5;
		padding: 10px;
	}

	h1 {
		color: #000000;
		text-align: left;
	}
</style>