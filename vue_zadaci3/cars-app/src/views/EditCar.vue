<template>
  <div>
    <app-add-car mode="edit" :id="$route.params.id"></app-add-car>
  </div>
</template>

<script>
import AppAddCar from '../components/AppAddCar.vue'

export default {
  components: { AppAddCar },
  name: 'EditCar',

  data() {
    return {

    }
  }
}

</script>

<style scoped>

</style>
