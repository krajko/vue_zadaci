<template>
    <div class="container">
        <ul class="list-unstyled">
            <li v-for="product in products" :key="product.id" class="my-4">

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
            products: [
                {
                    id: '1',
                    title: 'Product 1',
                    quantity: 1
                },
                {
                    id: '2',
                    title: 'Product 2',
                    quantity: 4
                }, 
                {
                    id: '3',
                    title: 'Product 3',
                    quantity: 13
                },
                {
                    id: '4',
                    title: 'Product 4',
                    quantity: 2
                },
                {
                    id: '5',
                    title: 'Product 5',
                    quantity: 7
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
