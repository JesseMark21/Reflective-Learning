<template>
	<h2>{{heading}}</h2>
	<input type="checkbox" id="sms" value="SMS Saver" v-model="checkedNames" @change="smsChecked($event)">
	<label for="sms">SMS Saver</label>
	<input type="checkbox" id="url" value="URL Shortening" v-model="checkedNames" @change="urlChecked($event)">
	<label for="url">URL Shortening</label>

</template>

<script>
	export default {
    data(){
      return{
        heading: "Enable Service",
        checkedNames:[],
      }
    },
    methods : {
      urlChecked : function(value) {
        this.checkedNames[0] = !this.checkedNames[0];
        this.checkedNames.push();
        this.heading = "url";
      },
      smsChecked : function(value) {
        this.checkedNames[1] = !this.checkedNames[1];
        this.checkedNames.push();
        this.heading = "sms";
      }
    },
    
  }
</script>
<style>
</style>