<template>
	<header>
		<h1> {{title}} </h1>
	</header>
</template>

<script>
	export default {
    data(){
      return{
        title: 'Message Broadcast Portal'

      }
    }
  }
</script>
<style>
	header {
		background: #542989;
		padding: 10px;
	}

	h1 {
		color: #cdcdcd;
		text-align: left;
	}
</style>