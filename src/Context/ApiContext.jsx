'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { fetchDataProducts } from '@/Services/api';



const ApiContext = createContext();


export const ApiProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchDataProducts('/products');
                setData(result);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };
        getData();
    }, []);
    return (
        <ApiContext.Provider value={{ data, error, loading }}>
            {children}
        </ApiContext.Provider>
    );
}
export const useApi = () => {
    return useContext(ApiContext);
};