import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { unknown } from "zod";

class AxiosController {
    public axiosInstance: AxiosInstance
    constructor(baseURL: string, ) {
        this.axiosInstance = axios.create({
            baseURL: baseURL,
            headers: { 
                'Content-Type': 'application/json'
            },
        });
    }

    async get(url: string, token: string) {

        try {
            const response = await this.axiosInstance.get(url, {headers: {Authorization: 'Bearer ' + token}});
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async post(url: string, data: any): Promise<AxiosResponse> {
        try {
            const response = await this.axiosInstance.post(url, data);
            return response;
        } catch (error: any) {
            console.error(error);
            throw error as AxiosError;

        }
    }

}

const baseURL = 'https://carlos-api-pi.vercel.app';
// const baseURL = 'http://localhost:3344';
export const axiosController = new AxiosController(baseURL);