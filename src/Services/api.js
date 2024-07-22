"use server"
import axios from 'axios';
const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
});
export const fetchData = async (products) =>{
    try{
        const response = await api.get(products);
        return response.data;
    }
    catch(error){
        console.error('Error Fetching data : ',error);
        throw error
    }
}