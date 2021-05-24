<template>
  <div>
    <h1>Cars component</h1>

    <ul class="list-unstyled">
      <li v-for="car in cars" :key="car.id"> {{ car.brand }} {{ car.model }} {{ car.year }} </li>
      <li v-if="!car">Car list is empty.</li>
    </ul>

  </div>
</template>

<script>
import Cars from '../services/Cars';

export default {
  name: 'AppCars',

  data() {
    return {
      cars: [],
    }
  },

  created() {
    this.cars = Cars.getAll().then(console.log);
    console.log(this.cars);
  }
}
</script>

<style scoped>

</style>
