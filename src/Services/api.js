"use server"
import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
});

export const fetchDataCards = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    }
    catch (error) {
        console.error('Error Fetching data : ', error);
        throw error
    }
}
export const fetchDataMenu = async (endpoint) => {
    try {
        const response = await api.get(endpoint)
        return response.data
    }
    catch (error) {
        console.error('Error Fetching data : ', error);
        throw error
    }
}
export const fetchMostView = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data.viewed;
    }
    catch (error) {
        console.error('Error Fetching data : ', error);
        throw error
    }
}
export const fetchNewCards = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    }
    catch (error) {
        console.error('Error Fetching data : ', error);
        throw error
    }
}
