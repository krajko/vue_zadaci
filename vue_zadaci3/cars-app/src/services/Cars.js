import axios from 'axios';

class Cars {
    constructor() {
        const instance = axios.create({
            baseURL: 'http://localhost:3000/api'
        });

        this.client = instance;
    }

    async getAll() {
        const { data } = await this.client.get('cars');

        return data;
    }

    async add(car) {
        const { status } = await this.client.post('cars', car);

        return status;
    }

    async getById(id) {
        const { data } = await this.client.get(`cars/${id}`);

        return data;
    }

    async edit(id, car) {
        const { status } = await this.client.patch(`cars/${id}`, car);

        return status;
    }

    async remove(id) {
        const { status } = await this.client.delete(`cars/${id}`);

        return status;
    }
}

export default new Cars();
