'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchDataCards, fetchDataMenu } from '@/Services/api';



const ApiContext = createContext();


export const ApiProvider = ({ children }) => {
    const [dataCard, setDataCard] = useState([]);
    const [dataMenu, setDataMenu] = useState([]);


    // useEffect(() => {
    //     const getDataCard = async () => {
    //         try {
    //             const result = await fetchDataCards('/products');
    //             setDataCard(result);
    //         }
    //         catch (error) {
    //             setError(error.message);
    //         }
    //         finally {
    //             setLoading(false);
    //         }
    //     };
    //     getDataCard();
    // }, []);

    // useEffect(() => {
    //     const getDataMenu = async () => {
    //         try {
    //             const result = await fetchDataMenu('/products/categories');
    //             setDataMenu(result);
    //         }
    //         catch {
    //             setError(error.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     getDataMenu();
    // }, [])
    // useEffect(()=>{
    //     const fetchCategoriesCards = async()=>{
    //         try{
    //             const data = await fetchDataCards('/products');
    //             setDataCard(data);
    //         }catch (error){
    //             console.error('Error loading products:',error);
    //         }finally{
    //             setCardLoading(false);
    //         }
    //     }
    //     const fetchMenuItems = async()=>{
    //         try{
    //             const data = await fetchDataMenu('/products/categories');
    //             setDataMenu(data);
    //         }catch(error){
    //             console.error('Error loading products:',error);
    //         }finally{
    //             setMenuLoading(false);
    //         }

    //     }
    //     fetchCategoriesCards();
    //     fetchMenuItems();
    // },[]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataCardSet = await fetchDataCards('/products');
                const dataMenuSet = await fetchDataMenu('/products/categories');
                setDataCard(dataCardSet);
                setDataMenu(dataMenuSet)
            } catch {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])
    return (
        <ApiContext.Provider value={{ dataCard, dataMenu }}>
            {children}
        </ApiContext.Provider>
    );
}
export const useApi = () => useContext(ApiContext);
