class HttpService {
    customers = [
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
    products = [
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
    getCustomers() {
        return this.customers;
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    getProducts() {
        return this.products;
    }
    incProductQuantity(i) {
        this.products[i].quantity++;
    }
    decProductQuantity(i) {
        if (this.products[i].quantity > 0) {
            this.products[i].quantity--;
        }
    }
}

export default new HttpService();