<template>
  <div>
    <h1>Cars component</h1>

    <ul class="list-unstyled">
      <li v-for="car in cars" :key="car.id"> 
        {{ car.brand }} {{ car.model }} {{ car.year }} 
        <router-link :to="`/edit/${car.id}`" class="btn text-success">Edit</router-link>
        <button class="btn" @click="remove(car.id)">Remove</button>
      </li>
      <li v-if="cars.length === 0">Car list is empty.</li>
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

  async created() {
    this.cars = await Cars.getAll();
  },

  methods: {

    async remove(id) {
      const response = await Cars.remove(id);

      if (response.status === 200) {
        this.cars = await Cars.getAll();
      }
    }
  }
}
</script>

<style scoped>

</style>
