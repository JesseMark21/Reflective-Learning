<template>
	<div>
		<app-header></app-header>
	</div>
	<message-text></message-text>
	</div>
	<recipients-text></recipients-text>
	<personalisation-text></personalisation-text>
	<enable-service-text></enable-service-text>
	<div>
		<div>
			<app-footer></app-footer>
		</div>
</template>
<script>
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'
  import MessageText from './components/MessageText.vue'
  import RecipientsText from './components/RecipientsText.vue'
  import PersonalisationText from './components/PersonalisationText.vue'
  import EnableServiceText from './components/EnableServiceText.vue'
			export default {
			components:{
			'app-header':Header,
			'app-footer':Footer,
      'message-text':MessageText,
      'recipients-text':RecipientsText,
      'personalisation-text':PersonalisationText,
      'enable-service-text':EnableServiceText,
			},
			data(){
			return{

			}
			}
			}
</script>
<style>
	#app {
		font-family: Lato, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		margin-top: 0px;
	}
</style>