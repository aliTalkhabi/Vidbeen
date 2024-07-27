'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { fetchDataCards, fetchDataMenu } from '@/Services/api';



const ApiContext = createContext();


export const ApiProvider = ({ children }) => {
    const [dataCard, setDataCard] = useState(null);
    const [dataMenu, setDataMenu] = useState(null);
    const [menuLoading , setMenuLoading] =useState(true);
    const [cardLoading,setCardLoading] = useState(true);

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
    useEffect(()=>{
        const fetchCategoriesCards = async()=>{
            try{
                const data = await fetchDataCards('/products');
                setDataCard(data);
            }catch (error){
                console.error('Error loading products:',error);
            }finally{
                setCardLoading(false);
            }
        }
        const fetchMenuItems = async()=>{
            try{
                const data = await fetchDataMenu('/products/categories');
                setDataMenu(data);
            }catch(error){
                console.error('Error loading products:',error);
            }finally{
                setMenuLoading(false);
            }
            
        }
        fetchCategoriesCards();
        fetchMenuItems();
    },[]);
    return (
        <ApiContext.Provider value={{ dataCard,cardLoading, dataMenu,menuLoading}}>
            {children}
        </ApiContext.Provider>
    );
}
export const useApi = () => useContext(ApiContext);
