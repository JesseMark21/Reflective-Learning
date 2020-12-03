<template>
  <div id="app">
    <img alt="Vue logo" src="https://grapevinegroup.co.za/wp-content/themes/grapevine/assets/img/grapevine-logo.png" />
    <HelloWorld msg="Create a Broadcast Message" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
