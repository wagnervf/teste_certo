import axios from 'axios';

let baseURL = 'https://viacep.com.br/ws/';


export const httpAxios = axios.create({
    baseURL: baseURL,
});

