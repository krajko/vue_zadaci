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
        const response = await this.client.post('cars', car);

        return response;
    }

    async getById(id) {
        const { data } = await this.client.get(`cars/${id}`);

        return data;
    }

    async edit(id, car) {
        const response = await this.client.patch(`cars/${id}`, car);

        return response;
    }

    async remove(id) {
        const response = await this.client.delete(`cars/${id}`);

        return response;
    }
}

export default new Cars();
