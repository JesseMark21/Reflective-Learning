<template>
	<h2>Personalisation</h2>
	<div class="e-float-input e-input-group">
		<input type="text" required/>
		<span class="e-float-line"></span>
		<label class="e-float-text"> Enter Personalised Values (as a comma separated list) Example: Name, Number </label>
	</div>
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
	e-float-input e-input-group {
		padding-top: 0px;
	}

	h2 {
		color: #000000;
		text-align: left;
	}
</style>