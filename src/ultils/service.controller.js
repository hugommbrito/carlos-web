import axios from "axios";

class AxiosController {
    constructor(baseURL) {
        this.axiosInstance = axios.create({
            baseURL: baseURL, headers: { 'Content-Type': 'application/json' },
        });
    }

    async get(url) {
        try {
            const response = await this.axiosInstance.get(url);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async post(url, data) {
        try {
            const response = await this.axiosInstance.post(url, data);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

}

// Usage example:
const baseURL = 'https://localhost:3333';
export const axiosController = new AxiosController(baseURL);
console.log(axiosController);
// const responseData = await axiosController.get('/data');