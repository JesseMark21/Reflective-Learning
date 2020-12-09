<template>
	<h2> Recipients </h2>
	<div>
		<!--element which is going to render the TextBox-->
		<input class="m-input" type="file" v-model="iFile" placeholder="Your Message Here"/>
		<p> FileName: {{iFile}} </p>
	</div>
</template>

<script>
	export default {
    data(){
      return{
        iFile: ''
      }
    }
  }
</script>
<style>
	m-input {
		padding: 0px;
	}

	h2 {
		color: #000000;
		text-align: left;
	}
</style>