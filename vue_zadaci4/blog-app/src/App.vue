<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>


<style lang="scss">

  $primary: #8ac6d1;
  $warning: #75cfb9de;

  $input-btn-focus-width: 1px;
  $input-btn-focus-color-opacity: 100;
  $input-btn-focus-blur: 0;
  $input-btn-focus-box-shadow: none;

  @import "../node_modules/bootstrap/scss/bootstrap.scss";

</style>


<style>

textarea {
    resize: none;
  }

  .btn-primary {
    color: white;
  }

  .btn-primary:hover {
    color: white;
  }

  .btn-primary:active {
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



  .fade-in-top {
    -webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  @-webkit-keyframes fade-in-top {
    0% {
      -webkit-transform: translateY(-30px);
              transform: translateY(-30px);
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
      -webkit-transform: translateY(-30px);
              transform: translateY(-30px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }

  .fade-in-bck {
	-webkit-animation: fade-in-bck 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in-bck 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  .fade-in-fwd {
    -webkit-animation: fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
            animation: fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  @-webkit-keyframes fade-in-bck {
    0% {
      -webkit-transform: translateZ(80px);
              transform: translateZ(80px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-bck {
    0% {
      -webkit-transform: translateZ(80px);
              transform: translateZ(80px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
  }





  @-webkit-keyframes fade-in-fwd {
    0% {
      -webkit-transform: translateZ(-80px);
              transform: translateZ(-80px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-fwd {
    0% {
      -webkit-transform: translateZ(-80px);
              transform: translateZ(-80px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
  }

</style>
