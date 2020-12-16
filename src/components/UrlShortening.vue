<template>
	<h2>URL Shortening</h2>
	<div class="e-float-input e-input-group">
		<input type="text" v-model="urlInput" required/>
		<span class="e-float-line"></span>
		<label class="e-float-text"> Enter the URL to be shortened </label>
		<p> URL: {{shortUrl}}</p>
	</div>
	<div><button v-on:click="shortenUrl(urlInput)">Confirm</button></div>
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
      // shortenUrl(){
      //   this.shortUrl = "shortenUrl"+"("+this.urlInput+")";
      // },
      shortenUrl : function(value) {
        var axios = require('axios');
        var data = JSON.stringify({"longUrl" : value});

        var config = {
          method: 'post',
          url: 'http://us.test15.vine.co.za/api/url_shorten',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };

        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
    
  }
</script>
<style scoped>
	e-float-input e-input-group {
		padding-top: 0px;
	}

	h2 {
		color: #000000;
		text-align: left;
	}

	.button {
		border: true;
		border-radius: 1px;
	}

	.button-close {
		background-color: light-grey;
	}
</style>