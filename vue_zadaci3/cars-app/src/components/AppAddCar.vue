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
                <button @click="reset" type="button" class="btn text-muted">Reset</button>
                <button @click="preview" type="button" class="btn">Preview</button>
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
            car: {},
        }
    },

    created() {
        this.getCar();
    },

    methods: {
        async addCar() {
            try {
                await Cars.add(this.car);
            } catch(err) {
                this.error();
                console.log(err);
            } finally {
                this.$router.push({ name: 'Cars' });
            }
        },

        async editCar() {
            try {
                await Cars.edit(this.car.id, this.car);
            } catch(err) {
                this.error();
                console.log(err);
            } finally {
                this.$router.push({ name: 'Cars' });
            }
        },

        async getCar() {
            if (this.editMode) {
                try {
                    this.car = await Cars.getById(this.$route.params.id);
                } catch (err) {
                    this.error();
                    console.log(err);
                }
            } else {
                this.reset();
            }
        },

        reset() {
            this.car = {
                brand: '',
                model: '',
                year: 1990,
                maxSpeed: 0,
                isAutomatic: false,
                engine: 'diesel',
                numberOfDoors: 4,
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
            if (this.editMode) {
                this.editCar();
            } else {
                this.addCar();
            }
        },

        error() {
            alert('Something went wrong. Please try again.');
        }

    },

    computed: {
        years() {
            return Array.from({length: 2019 - 1990}, (value, index) => 1990 + index);
        },

        editMode() {
            if (this.$route.params.id) {
                return true;
            }

            return false;
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
