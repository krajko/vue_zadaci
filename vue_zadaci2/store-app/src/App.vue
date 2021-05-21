<template>
  <div id="app">
    <div id="nav">
      <router-link to="/customers">Customers</router-link> |
      <router-link to="/products">Products</router-link>
    </div>
    <hr class="m-auto mb-4" style="width: 40vw;">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 30px;
  padding-bottom: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-active {
  color: #42b983;
}
</style>
