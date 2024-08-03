'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchDataCards, fetchDataCardsCategory, fetchDataMenu, fetchMostView, fetchNewCards, fetchTrainingCards } from '@/Services/api';
import { usePathname } from 'next/navigation';
const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const slug = usePathname();
    const [dataCard, setDataCard] = useState([]);
    const [dataMenu, setDataMenu] = useState([]);
    const [dataMostView, setDataMostView] = useState([]);
    const [dataNewCards, setDataNewCards] = useState([]);
    const [dataTrainingCards, setDataTrainingCards] = useState([]);
    const [dataCardCategory, setDataCardCategory] = useState([]);

    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const endpoint =  `${slug}home`;
                const [dataCardSet, dataMenuSet, dataMostViewset, dataNewCardsSet, dataTrainingCardsSet,dataCategoryCardSet] = await Promise.all([
                    fetchDataCards(endpoint), fetchDataMenu(endpoint), fetchMostView(endpoint), fetchNewCards(endpoint), fetchTrainingCards(endpoint)
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
        const fetchCategoryData = async () => {
            const endpoint = `/video-door-phone`;
            const [dataCategoryCardSet] = await Promise.all([
                fetchDataCardsCategory(endpoint)
            ]);
            setDataCardCategory(dataCategoryCardSet);
            console.log(dataCategoryCardSet);
        }
        if(slug==='/'){
            fetchHomeData();
        } else if(slug==='/category'){
            fetchCategoryData();
        }

    }, [slug])
    return (
        <ApiContext.Provider value={{ dataCard, dataMenu, dataMostView, dataNewCards, dataTrainingCards ,dataCardCategory}}>
            {children}
        </ApiContext.Provider>
    );
}
export const useApi = () => useContext(ApiContext);
