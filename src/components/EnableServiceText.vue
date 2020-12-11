<template>
	<h2>{{heading}}</h2>
	<input type="checkbox" id="sms" value="SMS Saver" v-model="checkedNames" @change="smsChecked($event)">
	<label for="sms">SMS Saver</label>
	<input type="checkbox" id="url" value="URL Shortening" v-model="checkedNames" @change="urlChecked($event)">
	<label for="url">URL Shortening</label>
	<h3> Selected: {{selected}} </h3>
	<div v-if=selected==="url">
		<url-shortening></url-shortening>
		</v-if>
	</div>

</template>

<script>
	import UrlShortening from './UrlShortening.vue'
	export default {
    data(){
      return{
        heading: "Enable Service",
        checkedNames:[false, false],
        selected: "none",
      }
    },
    components:{
      'url-shortening':UrlShortening,
    },
    methods : {
      urlChecked : function(value) {
        this.checkedNames[0] = !this.checkedNames[0];
        if(this.checkedNames[0] && this.checkedNames[1]){
          this.selected = "both";
        }
        else if(this.checkedNames[0]){
          this.selected = "url";
        }
        else if(this.checkedNames[1]){
          this.selected = "sms";
        }
        else if (!this.checkedNames[0] && !this.checkedNames[1]){
          this.selected = "none";
        }
        
      },
      smsChecked : function(value) {
        this.checkedNames[1] = !this.checkedNames[1];
        if(this.checkedNames[0] && this.checkedNames[1]){
          this.selected = "both";
        }
        else if(this.checkedNames[1]){
          this.selected = "sms";
        }
        else if(this.checkedNames[0]){
          this.selected = "url";
        }
        else if (!this.checkedNames[0] && !this.checkedNames[1]){
          this.selected = "none";
        }
      }
    },
    
  }
</script>
<style>
</style>