<template>
	<footer>
		<p> {{copyright}} </p>
	</footer>
</template>

<script>
	export default {
    data(){
      return{
        copyright: 'Copyright 2020 Reflective Learning'
      }
    }
  }
</script>
<style>
	footer {
		background: white;
		padding: 10px;
	}

	p {
		color: #cdcdcd;
		text-align: left;
	}
</style>