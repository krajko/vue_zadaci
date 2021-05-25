<template>
    <div>
        <h1>Add car</h1>

        <form @submit.prevent="addCar">
            <input v-model="newCar.brand" type="text" placeholder="Brand" required minlength="2">

            <input v-model="newCar.model" type="text" placeholder="Model" required minlength="2">

            <select v-model="newCar.year" type="year" required>
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

            <label>Number of doors</label>
            <input v-model="newCar.numberOfDoors" type="number" placeholder="Number of doors" required min="2">

            <div class="mt-5">
                <button @click="reset" class="btn text-muted">Reset</button>
                <button @click="preview" class="btn">Preview</button>
                <button type="submit" class="btn btn-success">Submit</button>
            </div>
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
            year: 2018,
            maxSpeed: 0,
            isAutomatic: false,
            engine: 'diesel',
            numberOfDoors: 4,
        },

        errors: {}
    }
  },

  created() {

  },

  methods: {
    validate() {
        this.errors = {};

        if (this.newCar.brand.length < 2) {
            this.errors.brand = 'Brand is required and must be at least 2 characters long.';
        }

        if (this.newCar.model.length < 2) {
            this.errors.model = 'Model is required and must be at least 2 characters long.';
        }

        if (this.newCar.year === 0) {
            this.errors.year = 'Please select a year.';
        }

        if (this.newCar.engine === '') {
            this.errors.engine = 'Please select engine type.';
        }

        if (this.newCar.numberOfDoors === 0) {
            this.errors.numberOfDoors = 'Please choose a number of doors.';
        }

        if (this.errors === {}) {
            console.log('add');
            this.addCar();
        }
    },

    async addCar() {
        let response = await Cars.add(this.newCar);

        if (response.status === 200) {
            this.$router.push('cars');
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
        margin: 10px auto;
    }
    input[type="text"] {
        display: block;
    }
    input[type="number"] {
        display: block;
        margin-top: 0;
    }
    input[type="radio"] {
        margin: 30px 3px;
    }
    select {
        margin-bottom: 10px;
    }
    label {
        margin: 7px;
    }
    button {
        display: block;
        margin: 1rem auto;
    }

</style>
