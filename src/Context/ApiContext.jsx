'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchDataCards, fetchDataMenu, fetchMostView, fetchNewCards, fetchTrainingCards } from '@/Services/api';
import { usePathname } from 'next/navigation';
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const slug = usePathname();
    const [dataCard, setDataCard] = useState([]);
    const [dataMenu, setDataMenu] = useState([]);
    const [dataMostView, setDataMostView] = useState([]);
    const [dataNewCards, setDataNewCards] = useState([]);
    const [dataTrainingCards, setDataTrainingCards] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const endpoint = `${slug}home`;
                const [dataCardSet,dataMenuSet,dataMostViewset,dataNewCardsSet,dataTrainingCardsSet] = await Promise.all([
                    fetchDataCards(endpoint),fetchDataMenu(endpoint),fetchMostView(endpoint),fetchNewCards(endpoint),fetchTrainingCards(endpoint)
                ])
                setDataCard(dataCardSet);
                setDataMenu(dataMenuSet);
                setDataMostView(dataMostViewset);
                setDataNewCards(dataNewCardsSet);
                setDataTrainingCards(dataTrainingCardsSet);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [slug])
    return (
        <ApiContext.Provider value={{ dataCard, dataMenu, dataMostView, dataNewCards,dataTrainingCards }}>
            {children}
        </ApiContext.Provider>
    );
}
export const useApi = () => useContext(ApiContext);
