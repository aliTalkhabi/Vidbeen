'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchDataCards, fetchDataMenu } from '@/Services/api';



const ApiContext = createContext();


export const ApiProvider = ({ children }) => {
    const [dataCard, setDataCard] = useState(null);
    const [dataMenu, setDataMenu] = useState(null);
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

    useEffect(() => {
        const getDataMenu = async () => {
            try {
                const result = await fetchDataMenu('/products/categories');
                setDataMenu(result);
            }
            catch {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getDataMenu();
    }, [])

    return (
        <ApiContext.Provider value={{ dataCard, dataMenu, error, loading }}>
            {children}
        </ApiContext.Provider>
    );
}
export const useApi = () => {
    return useContext(ApiContext);
};