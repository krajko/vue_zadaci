<template>
  <div id="app">
    <div id="nav" class="h1 py-3 my-4">
      <router-link to="/posts" class="me-4">Posts</router-link>
      <router-link to="/add" class="ms-4">Add</router-link>
    </div>
    <transition name="fade-in-top">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">

$primary: #75cfb8;
$warning: #ffc478;

  // $danger: #ec4646;

$input-btn-focus-width: .1rem;
$input-btn-focus-blur: 0;
$input-btn-focus-color-opacity: .25;

@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>

<style>
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

#nav a.router-link-active {
  color: var(--bs-primary);
}

.btn-primary {
  color: white;
}

.btn-primary:hover {
  color: white;
}

.btn-warning {
  color: white;
}

.btn-warning:hover {
  color: white;
}

.btn-danger {
  color: white;
}

.btn-danger:hover {
  color: white;
}

.fade-in-top-enter-active {
	-webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

</style>
