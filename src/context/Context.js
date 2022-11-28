import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const Context = createContext();

const API_KEY = '92927d61';

const MovieContext = ({ children }) => {
  
    const [movies, setMovies] = useState();
    const [search, setSearch] = useState('');
    const [selectedMovie, setSelectedMovie] = useState('');
  
    const fetchMovies = async (searchValue) => {
        const res = await axios (
            `https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`
        );
        const data = res.data;
        setMovies(data.Search);
    };

    const movieDetails = async (id) => {
        const res = await axios(
            `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
        );
        const data = res.data;
        setSelectedMovie(data);
    };

    useEffect(() => {
        console.log(API_KEY);
        fetchMovies(search);
    }, [search]);

    return (
    <Context.Provider
        value={{
            setSearch,
            movies,
            movieDetails,
            selectedMovie
        }}
    >
        {children}
    </Context.Provider>
  )
}

export default MovieContext