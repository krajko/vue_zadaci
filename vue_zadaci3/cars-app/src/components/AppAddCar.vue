<template>
    <div>
        <h1>Add car</h1>

        <form v-on:submit.prevent="addCar">
            <input v-model="newCar.brand" type="text" placeholder="Brand">

            <input v-model="newCar.model" type="text" placeholder="Model">

            <select v-model="newCar.year" type="year">
                <option disabled hidden value="0">Year </option>
                <option v-for="year in years" :key="year" :value="year"> {{ year }}</option>
            </select>

            <div>
                <label>Max speed</label>
                <input v-model="newCar.maxSpeed" type="number">
            </div>

            <div>
                <input v-model="newCar.isAutomatic" type="checkbox">
                <label>Automatic</label>
            </div>

            <div>
                <input v-model="newCar.engine" type="radio" value="diesel"> Diesel
                <input v-model="newCar.engine" type="radio" value="petrol"> Petrol
                <input v-model="newCar.engine" type="radio" value="electric"> Electric
                <input v-model="newCar.engine" type="radio" value="hybrid"> Hybrid
            </div>

            <input v-model="newCar.numberOfDoors" type="number" placeholder="Number of doors">

            <button @click="reset" class="btn">Reset</button>
            <button @click="preview" class="btn">Preview</button>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>

    </div>
</template>

<script>
import Cars from '../services/Cars';

export default {
  name: 'AppAddCar',

  data() {
    return {
        newCar: {
            brand: '',
            model: '',
            year: 0,
            maxSpeed: 0,
            isAutomatic: false,
            engine: '',
            numberOfDoors: 0,
        }
    }
  },

  created() {

  },

  methods: {
    async addCar() {
        let response = await Cars.add(this.newCar);

        console.log(response);

        if (response.status === 200) {
            this.$router.push('/cars');
        }
    },

    reset() {
        this.newCar = {
            brand: '',
            model: '',
            year: 0,
            maxSpeed: 0,
            isAutomatic: false,
            engine: '',
            numberOfDoors: 0,
        }
    },

    preview() {
        let alertMsg = '';

        for (const [key, value] of Object.entries(this.newCar)) {
            alertMsg += `${key}: ${value} \n`;
        }

        alert(alertMsg);
    }
    
  },

  computed: {
      years() {
          return Array.from({length: 2019 - 1990}, (value, index) => 1990 + index);
      }
  }
}
</script>

<style scoped>
    input {
        margin: 1rem auto;
    }
    input[type="text"] {
        display: block;
    }
    input[type="number"] {
        display: block;
    }
    label {
        margin: 7px;
    }
    button {
        display: block;
        margin: 1rem auto;
    }

</style>
