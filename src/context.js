//useContext hook and context api
//steps:-1.create context, 2.create provider, 3.consumer
//here term means:- context(like warehouse),provider(like delivery boy),consumer(user)
import React, { createContext, useContext, useEffect, useState } from "react";
// const api_url = 'https://www.omdbapi.com/?apikey=ee0cd51f&s=spiderman'
export const api_url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}f`

//step 1 create context
const AppContext = createContext();
// step2 create provider
const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [isError, setIsError] = useState({ showError: false, msg: '' })
    const [searchQuery, setSearchQuery] = useState('spiderman')

    useEffect(() => {
        let timerOut=setTimeout(()=>{
            getMovies(`${api_url}&s=${searchQuery}`);
        },1500);
        return ()=>{ clearTimeout(timerOut) }
        
        
    }, [searchQuery])

    const getMovies = async (givenUrl) => {
        setIsLoading(true);
        try {
            const res = await fetch(givenUrl)
            const data = await res.json();
            console.log('api data', data)
            if (data.Response === "True") {
                setMovies(data.Search);
                setIsError({showError: false, msg: ''});
                setIsLoading(false);
            }
            else{
                setIsError({showError: true, msg: data.error});
                setIsLoading(false);

                
            }
    
        } catch (error) {
            console.log(error)
        }
    
    }
    return <AppContext.Provider value={{isLoading:isLoading,movies:movies,isError:isError,searchQuery:searchQuery, setSearchQuery:setSearchQuery}}>{children}</AppContext.Provider>

}
// IMDb url and key



const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext };