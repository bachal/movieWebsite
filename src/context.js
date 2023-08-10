import React, { createContext, useContext, useEffect, useState } from "react";
export const api_url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}f`

const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [isError, setIsError] = useState({ showError: false, msg: '' })
    const [searchQuery, setSearchQuery] = useState('hulk')

    useEffect(() => {
        let timerOut = setTimeout(() => {
            if (searchQuery !== "") {
                getMovies(`${api_url}&s=${searchQuery}`);
            }
        }, 1500);
        return () => { clearTimeout(timerOut) }
    }, [searchQuery])

    const getMovies = async (givenUrl) => {
        setIsLoading(true);
        try {
            const res = await fetch(givenUrl)
            const data = await res.json();
            if (data.Response === "True") {
                setMovies(data.Search);
                setIsError({ showError: false, msg: '' });
                setIsLoading(false);
            }
            else {
                setMovies([]);
                setIsError({ showError: true, msg: data.Error });
                setIsLoading(false)
            }

        } catch (error) {
            console.log(error)
        }

    }
    return <AppContext.Provider value={{ isLoading: isLoading, movies: movies, isError: isError, searchQuery: searchQuery, isError: isError, setSearchQuery: setSearchQuery }}>{children}</AppContext.Provider>

}

const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext };