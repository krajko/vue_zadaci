<template>
    <div class="container">
        <input v-model="query" class="form-control w-25 mt-5" placeholder="Search products">
        <ul class="list-unstyled mt-5">
            <li v-for="product in filteredProducts" :key="product.id" class="my-4">

                <div class="d-flex flex-row mx-auto" style="width: 30vw">
                    <div class="col-6 text-start">
                        <p class="my-0 py-0"> {{ product.title }} </p>
                    </div>
                    <div class="col d-flex justify-content-end align-items-end text-end">
                        <p class="my-0 py-0" style="font-size: .9rem"> Quantity: {{ product.quantity }} </p>
                    </div>
                </div>
                <hr class="mx-auto my-0 py-0" style="width: 30vw">
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'AppProducts',
    data() {
        return {
            query: '',
            products: [
                {
                    id: '1',
                    title: 'Keyboard',
                    quantity: 3
                },
                {
                    id: '2',
                    title: 'Cigarettes',
                    quantity: 13
                }, 
                {
                    id: '3',
                    title: 'Dog',
                    quantity: 1
                },
                {
                    id: '4',
                    title: 'Shoes',
                    quantity: 2
                },
                {
                    id: '5',
                    title: 'Juice',
                    quantity: 7
                }
            ]
        }
    },
    computed: {
        filteredProducts() {
            return this.products.filter(product => {
                return product.title.toLowerCase().includes(this.query);
            });
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
</style>
