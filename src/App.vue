<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

  html, body {
    margin: 0px;
    height: 100%;
    padding: 0px;
  }

  #app {
    padding: 0px;
    height: 100%;
    margin: 0px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
