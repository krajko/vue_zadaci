<template>
    <div class="container">
        <input v-model="query" class="form-control w-25 my-5" placeholder="Search products">

        <ul class="list-unstyled my-5">
            <li v-for="(product, i) in filteredProducts" :key="product.id" class="my-4 py-2">

                <div class="d-flex flex-row mx-auto" style="width: 25vw">
                    <div class="col d-flex justify-content-start align-items-end">
                        <button @click="dec(i)" class="btn btn-quantity"><strong> - </strong></button>
                        <p class="mx-1 my-0 py-0" style="font-size: .9rem"> <strong>{{ product.quantity }}</strong></p>
                        <button @click="inc(i)" class="btn btn-quantity"><strong> + </strong></button>
                    </div>
                    <div class="col-8 d-flex align-items-end text-start">
                        <p class="my-0 py-0"> {{ product.title }} </p>
                    </div>
                    <div class="col-2 text-end">
                        <router-link :to="{ name: 'sell', params: { id: product.id } }" class="btn btn-success" style="font-size: .9rem;">Sell</router-link>
                    </div>
                </div>
                <hr class="mx-auto my-0 py-0" style="width: 25vw">
                
            </li>
        </ul>
    </div>
</template>

<script>
import httpService from "../services/HttpService";

export default {
    name: 'AppProducts',
    data() {
        return {
            query: '',
            products: []
        }
    },
    created() {
        this.products = httpService.getProducts();
    },
    computed: {
        filteredProducts() {
            return this.products.filter(product => {
                return product.title.toLowerCase().includes(this.query.toLowerCase());
            });
        }
    },
    methods: {
        inc(i) { 
            httpService.incProductQuantity(i);
        },  
        dec(i) {
            httpService.decProductQuantity(i);
        }
    }
}
</script>

<style scoped>
    input {
        display: block;
        margin: .4rem auto;
    }
    .form-control:focus {
        border-color: #42b983;
        box-shadow: none;
        box-shadow: 0 1 .1rem #42b983;
    }
    .btn-quantity {
        color: #42b983;
        padding: 0;
        margin: 0 2px;
    }
    .btn:focus {
        box-shadow: none;
    }
    .btn-success {
        background-color: #42b983;
        border-color: #42b983;
        padding: .15rem .8rem;
        border-radius: 0.3rem 0.3rem 0 0;
    }
    .btn-success:hover {
        background-color: #37a071;
    }
</style>
