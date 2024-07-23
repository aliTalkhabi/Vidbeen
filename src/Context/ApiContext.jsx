'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchDataCards } from '@/Services/api';



const ApiContext = createContext();


export const ApiProvider = ({ children }) => {
    const [dataCard, setDataCard] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDataCard = async () => {
            try {
                const result = await fetchDataCards('/products');
                setDataCard(result);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };
        getDataCard();
    }, []);
    return (
        <ApiContext.Provider value={{ dataCard, error, loading }}>
            {children}
        </ApiContext.Provider>
    );
}
export const useApi = () => {
    return useContext(ApiContext);
};