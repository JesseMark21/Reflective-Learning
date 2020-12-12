<template>
	<h2>URL Shortening</h2>
	<div class="e-float-input e-input-group">
		<input type="text" v-model="urlInput" required/>
		<span class="e-float-line"></span>
		<label class="e-float-text"> Enter the URL to be shortened </label>
		<p> URL: shortenUrl({{urlInput}})</p>
	</div>
</template>

<script>
	export default {
    data(){
      return{
        urlInput:'',
        shortUrl:'',
      }
    },
    methods : {
      // shortenUrl : function(value) {
      //   axios
      //   .post('/api/url_shorten')
      //   .then(response => (this.response = response.data.shortCode))
      //   return
      // }
    }
    
  }
</script>
<style>
	e-float-input e-input-group {
		padding-top: 0px;
	}

	h2 {
		color: #000000;
		text-align: left;
	}
</style>