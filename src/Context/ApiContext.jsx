'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchDataCards, fetchDataMenu, fetchMostView, fetchNewCards } from '@/Services/api';
import { usePathname } from 'next/navigation';
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const slug = usePathname();
    const [dataCard, setDataCard] = useState([]);
    const [dataMenu, setDataMenu] = useState([]);
    const [dataMostView, setDataMostView] = useState([]);
    const [dataNewCards, setDataNewCards] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const endpoint = `${slug}home`;
                const dataCardSet = await fetchDataCards(endpoint);
                const dataMenuSet = await fetchDataMenu(endpoint);
                const dataMostView = await fetchMostView(endpoint);
                const dataNewCards = await fetchNewCards(endpoint);
                console.log(dataMostView);
                setDataCard(dataCardSet);
                setDataMenu(dataMenuSet);
                setDataMostView(dataMostView);
                setDataNewCards(dataNewCards);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [slug])
    return (
        <ApiContext.Provider value={{ dataCard, dataMenu, dataMostView, dataNewCards }}>
            {children}
        </ApiContext.Provider>
    );
}
export const useApi = () => useContext(ApiContext);
