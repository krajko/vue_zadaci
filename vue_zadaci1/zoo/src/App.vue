<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AnimalList msg="Animal List"/>
  </div>
</template>

<script>
import AnimalList from './components/AnimalList.vue'

export default {
  name: 'App',
  components: {
    AnimalList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
