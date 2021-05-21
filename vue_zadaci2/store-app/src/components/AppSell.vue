<template>
    <div class="container my-5">
        <div class="row w-50 mx-auto">
        <h1>{{ product.title }}</h1>
        <p>Amount in stock: {{ product.quantity }}</p>
        </div>

        <div v-if="product.quantity > 0" class="row mx-auto" style="width: 15vw">
            <div class="mt-5">
                <select v-model="selected" class="form-select" v-bind:class="{ 'is-invalid': error, 'is-valid': selected !== 0 }">
                    <option disabled hidden value="0">Select a customer</option>
                    <option :value="customer.id" v-for="customer in customers" :key="customer.id">{{ customer.firstName }} {{ customer.lastName }}</option>
                </select>
                <div v-if="error != ''" class="invalid-feedback">
                    {{ error }}
                </div>
            </div>

            <div class="row mx-auto mt-4" style="width: 6vw">
                <button @click="confirm" class="btn btn-success mb-2">Confirm</button>
                <button @click="cancel" class="btn btn-sm link">Cancel</button>
            </div>
        </div>

        <div v-else>
            <router-link to="/products" class="btn btn-success">Go back to products</router-link>
        </div>
  </div>
</template>

<script>
import httpService from '../services/HttpService'

export default {
  name: 'AppSell',
  data() {
      return {
        products: [],
        customers: [],
        selected: 0,
        error: null
      }
  },
  created() {
      this.products = httpService.getProducts();
      this.customers = httpService.getCustomers();
  },
  computed: {
      product() {
          return this.products.find(product => product.id == this.$route.params.id);
      }
  },
  methods: {
      confirm() {
        if (this.selected === 0) {
            this.error = 'Please select a customer.';
            return this.error;
        }

        this.error = null;
        httpService.sellProduct(this.selected, this.$route.params.id);
      },

      cancel() {
        this.$router.push('/products');
      }
  }
}
</script>

<style scoped>
    .btn:focus {
        box-shadow: 0 0 .2rem #42b983;
    }
    .btn-success {
        background-color: #42b983;
        border-color: #42b983;
    }
    .btn-success:hover {
        background-color: #37a071;
    }
    .form-select:focus {
        border-color: #42b983;
        box-shadow: none;
        box-shadow: 0 1 .1rem #42b983;
    }
    .link:focus {
        box-shadow: none;
        margin: 0;
    }
</style>