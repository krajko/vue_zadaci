<template>
    <div class="container">
        <ul class="list-unstyled">
            <li v-for="(customer, index) in customers" :key="customer.id" class="my-3">
                <div class="d-flex justify-content-between align-items-baseline mx-auto my-0 py-0" style="width: 25vw">
                    <div class="flex-col text-start">                    
                        <p class="my-0 py-0"><strong>

                            {{ customer.firstName }} {{ customer.lastName }}
                        
                        </strong></p> 
                    </div>
                    <div class="col text-end">
                        <button @click="remove(index)" class="btn btn-sm my-0">Remove</button>
                    </div>
                </div>
                    <hr class="mx-auto my-0 py-0" style="width: 25vw">
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'AppCustomers',
    data() {
        return {
            customers: [
                {
                    id: 1,
                    firstName: 'John',
                    lastName: 'Doe',
                    email: 'john@doe.com',
                    products: []
                },
                {
                    id: 2,
                    firstName: 'Jane',
                    lastName: 'Doe',
                    email: 'jane@doe.com',
                    products: []
                },
                {
                    id: 3,
                    firstName: 'Another',
                    lastName: 'Customer',
                    email: 'another@customer.com',
                    products: []
                },
                {
                    id: 4,
                    firstName: 'Yet Another',
                    lastName: 'Customer',
                    email: 'yetanother@customer.com',
                    products: []
                }
            ]
        }
    },
    methods: {
        remove(index) {
            this.customers.splice(index, 1);
        }
    },
    props: {
    }
}
</script>

<style scoped>
    .btn {
        color: #42b983;
    }
</style>

