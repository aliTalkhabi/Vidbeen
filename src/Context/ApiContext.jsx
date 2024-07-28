'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchDataCards, fetchDataMenu, fetchMostView } from '@/services/api';



const ApiContext = createContext();


export const ApiProvider = ({ children }) => {
    const [dataCard, setDataCard] = useState([]);
    const [dataMenu, setDataMenu] = useState([]);
    const [dataMostView, setDataMostView] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataCardSet = await fetchDataCards('/products');
                const dataMenuSet = await fetchDataMenu('/products/categories');
                const dataMostView = await fetchMostView('/products?limit=3');
                setDataCard(dataCardSet);
                setDataMenu(dataMenuSet);
                setDataMostView(dataMostView);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])
    return (
        <ApiContext.Provider value={{ dataCard, dataMenu, dataMostView }}>
            {children}
        </ApiContext.Provider>
    );
}
export const useApi = () => useContext(ApiContext);
