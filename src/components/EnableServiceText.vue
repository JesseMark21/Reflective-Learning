<template>
	<h2>Enable Service</h2>
	<input type="checkbox" id="sms" value="SMS Saver" v-model="checkedNames">
	<label for="sms">SMS Saver</label>
	<input type="checkbox" id="url" value="URL Shortening" v-model="checkedNames">
	<label for="url">URL Shortening</label>
</template>

<script>
	export default {
    data(){
      return{
      }
    }
  }
</script>
<style>
</style>