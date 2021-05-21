<template>
    <div class="d-flex flex-row justify-content-center">
        <div class="mx-4 mt-4">
            <div class="text-start">
                <h5 class="mb-1"><strong>Add a customer</strong></h5>
            </div>
            <hr class="mt-0">

            <form v-on:submit.prevent="addCustomer">
                <input v-model="newCustomer.firstName" class="form-control form-control-sm" type="text" placeholder="First name">
                <input v-model="newCustomer.lastName" class="form-control form-control-sm" type="text" placeholder="Last name">
                <input v-model="newCustomer.email" class="form-control form-control-sm" type="email" placeholder="Email">

                <button class="btn btn-success mt-2" type="submit">Add</button>
            </form>
        </div>

        <div class="mx-4">
            <ul class="list-unstyled">
                <li v-for="(customer, index) in customers" :key="customer.id" class="my-4">
                    
                    <div class="d-flex flex-row mx-auto" style="width: 30vw">
                        <div class="col-6 text-start">                
                                <p class="my-0 py-0"> {{ customer.firstName }} {{ customer.lastName }} </p> 
                                <p class="my-0 py-0 text-muted" style="font-size: .9rem;"> {{ customer.email }} </p>
                        </div>
                        <div class="col-4 d-flex justify-content-end align-items-end text-end">
                            <router-link :to="{ name:'latest-purchases', params: { id: customer.id } }" :customers="customers" class="btn btn-sm link"><em>Latest purchases</em></router-link>
                        </div>
                        <div class="col-2 d-flex justify-content-end align-items-end text-end">
                            <button @click="remove(index)" class="btn btn-sm text-muted link" style="font-size: .8rem;">Remove</button>
                        </div>
                    </div>
                    <hr class="mx-auto my-0 py-0" style="width: 30vw">

                </li>
            </ul>
        </div>

    </div>
</template>

<script>

export default {
    name: 'AppCustomers',
    data() {
        return {

            newCustomer: {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                products: []
            },

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
        },
        addCustomer() {
            this.newCustomer.id = this.customers.reduce((acc, curr) => {
                if (curr.id > acc) {
                    acc = curr.id;
                }
                acc++;

                return acc;
            }, this.customers[0].id) 

            let newCustomer = {...this.newCustomer};
            this.customers.push(newCustomer);

            this.newCustomer = {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                products: []
            };
        },
        
    }
}
</script>

<style scoped>
    .btn-sm {
        color: #42b983;
        margin-bottom: -6px;
    }
    .btn-success {
        background-color: #42b983;
        border-color: #42b983;
    }
    .btn-success:hover {
        background-color: #37a071;
    }
    .btn:focus {
        box-shadow: 0 0 .2rem #42b983;
    }
    .link:focus {
        box-shadow: none;
    }
    input {
        display: block;
        margin: .4rem auto;
    }
    .form-control:focus {
        border-color: #42b983;
        box-shadow: none;
        box-shadow: 0 0 .1rem #42b983;
    }

</style>

