<template>
  <div id="nav" class="text-center h1 py-3 my-4">
      <div id="posts" class="d-inline">
        <router-link to="/posts" class="posts me-4">Posts</router-link>
      </div>
      <div id="add" class="d-inline">
        <router-link to="/add" class="add ms-4">Add</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    transition: ease-in-out 0.6s;
  }

  #posts a.router-link-active {
    color: var(--bs-primary);
  }

  #add a.router-link-active {
    color: var(--bs-warning);
  }
</style>
