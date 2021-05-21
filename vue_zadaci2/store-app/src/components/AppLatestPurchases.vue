<template>
    <div>

        <div class="mx-auto mt-5" style="width: 25vw;">
            <div class="d-flex flex-row justify-content-between align-items-end">
                <div class="text-start">
                    <h6 class="py-0 my-0"><strong>{{ customer.firstName }} {{ customer.lastName }}</strong></h6>
                </div>
                <div class="text-end">
                    <p class="py-0 my-0 text-muted"><em>{{ customer.email }}</em></p>
                </div>
            </div>
            <hr class="mx-auto my-1">
        </div>

        <div class="d-flex flex-column text-start mx-auto my-3" style="width: 20vw;">
            <ul class="list-unstyled ms-3">
                <li v-for="product in customer.products" :key="product.id">
                    <em>Product name</em>
                    <hr class="my-0" style="width:20vw">
                </li>
                <li v-if="customer.products.length === 0">
                    <p><em>No products to show</em></p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    props: ['id', 'customers'],
    data() {
        return {

        }
    },
    computed: {     

        customer() {
            let customer = this.customers.reduce((acc, curr) => {
                if (curr.id === this.id) {
                    acc = curr;
                }

                return acc;
            }, {});
            console.log(customer);
            console.log(this.id);
            return customer;
        }

    }
}
</script>

<style scoped>

</style>