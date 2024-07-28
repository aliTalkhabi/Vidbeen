"use server"
import axios from 'axios';
const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
});
export const fetchDataCards = async (products) => {
    try {
        const response = await api.get(products);
        return response.data;
    }
    catch (error) {
        console.error('Error Fetching data : ', error);
        throw error
    }
}
export const fetchDataMenu = async (categories) => {
    try {
        const response = await api.get(categories)
        return response.data
    }
    catch (error) {
        console.error('Error Fetching data : ', error);
        throw error
    }
}
export const fetchMostView = async (products) => {
    try {
        const response = await api.get(products);
        return response.data;
    }
    catch (error) {
        console.error('Error Fetching data : ', error);
        throw error
    }
}
export const fetchNewCards = async (products) => {
    try {
        const response = await api.get(products);
        return response.data;
    }
    catch (error) {
        console.error('Error Fetching data : ', error);
        throw error
    }
}
