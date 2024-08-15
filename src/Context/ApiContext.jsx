'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchDataCards, fetchDataCardsCategory, fetchDataMenu, fetchMostView, fetchNewCards, fetchTrainingCards } from '@/Services/api';
import { usePathname } from 'next/navigation';
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const slug = usePathname();
    const [dataMenu, setDataMenu] = useState([]);

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const endpoint = `${slug}`;
                const [dataMenuSet] = await Promise.all([
                    fetchDataMenu(endpoint)
                ])
                setDataMenu(dataMenuSet);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchHomeData();
    }, [slug])
    return (
        <ApiContext.Provider value={{ dataMenu }}>
            {children}
        </ApiContext.Provider>
    );
}
export const useApi = () => useContext(ApiContext);
