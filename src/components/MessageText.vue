<template>
	<h2> Message </h2>
	<div>
		<!--element which is going to render the TextBox-->
		<input class="m-input" type="text" v-model="words" placeholder="Your Message Here" required/>
		<p> Message: {{words}}</p>
	</div>
</template>

<script>
	export default {
    data(){
      return{
        words: ''
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