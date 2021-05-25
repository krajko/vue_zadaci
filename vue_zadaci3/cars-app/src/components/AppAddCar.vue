<template>
    <div>

        <form @submit.prevent="submit">
            <input v-model="car.brand" type="text" placeholder="Brand" required minlength="2">

            <input v-model="car.model" type="text" placeholder="Model" required minlength="2">

            <select v-model="car.year" type="year" required>
                <option v-for="year in years" :key="year" :value="year"> {{ year }}</option>
            </select>

            <div>
                <label>Max speed</label>
                <input v-model="car.maxSpeed" type="number">
            </div>

            <div>
                <input v-model="car.isAutomatic" type="checkbox">
                <label>Automatic</label>
            </div>

            <div>
                <input v-model="car.engine" type="radio" value="diesel"> Diesel
                <input v-model="car.engine" type="radio" value="petrol"> Petrol
                <input v-model="car.engine" type="radio" value="electric"> Electric
                <input v-model="car.engine" type="radio" value="hybrid"> Hybrid
            </div>

            <label>Number of doors</label>
            <input v-model="car.numberOfDoors" type="number" placeholder="Number of doors" required min="2">

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
    props: ['mode', 'id'],

    data() {
        return {
            car: this.getCar(),

        }
    },

    created() {
        this.car = {
            brand: '',
            model: '',
            year: 2018,
            maxSpeed: 0,
            isAutomatic: false,
            engine: 'diesel',
            numberOfDoors: 4
        }
    },

    methods: {
        async addCar() {
            let response = await Cars.add(this.car);

            if (response.status === 200) {
                this.$router.push({ name: 'Cars' });
            }
        },

        async editCar() {
            let response = await Cars.edit(this.id, this.car);

            if (response.status === 200) {
                this.$router.push({ name: 'Cars' });
            }
        },

        async getCar() {
            if (this.mode === 'edit') {
                return this.car = await Cars.getById(this.id);
            }
            
        },

        reset() {
            this.car = {
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

            for (const [key, value] of Object.entries(this.car)) {
                alertMsg += `${key}: ${value} \n`;
            }

            alert(alertMsg);
        },

        submit() {
            if (this.mode == 'edit') {
                this.editCar();
            }

            if (this.mode == 'add') {
                this.addCar();
            }
        }

    },

    computed: {
        years() {
            return Array.from({length: 2019 - 1990}, (value, index) => 1990 + index);
        },

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
