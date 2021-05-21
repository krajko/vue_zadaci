<template>
    <div>

        <div class="mx-auto mt-5" style="width: 25vw;">
            <h1 class="py-0 my-0"> {{ customer.firstName }} {{ customer.lastName }} </h1>
            <p class="py-0 my-0 text-muted"> {{ customer.email }} </p>
        </div>

        <div class="row mt-5">
            <h5 class="mb-1 pb-0">Recently purchased</h5>
            <hr class="my-0 py-0 mx-auto" style="width: 10vw;">
        </div>
        <div class="d-flex flex-column text-start mx-auto" style="width: 20vw;">
            <ul class="list-unstyled mx-auto">
                <li v-for="product in customer.products" :key="product.id" class="my-3">
                    <em>{{ product.title }}</em>
                    <!-- <hr class="my-0" style="width:20vw"> -->
                </li>
                <li v-if="customer.products.length === 0" class="my-3">
                    <p><em>No products to show</em></p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import httpService from "../services/HttpService";

export default {
    data() {
        return {
            customers: []
        }
    },

    created() {
        this.customers = httpService.getCustomers();
    },

    computed: {     
        customer() {
            return this.customers.find(customer => customer.id == this.$route.params.id);
        }
    }
}
</script>

<style scoped>

</style>