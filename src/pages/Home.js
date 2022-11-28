import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import Cards from '../components/Cards/Cards'
import { Context } from "../context/Context";
import './Home_style.css'

const Home = () => {

    const { setSearch, movies } = useContext(Context);
    const handleSearch = (e) => {
        setSearch(e.target.value)
    };

    return (
        <div className='container'>
            <Header handleSearch={handleSearch}/>
            {movies?.length > 0 ? (
                <div className='movies_container'>
                    {movies?.map((movie) => {
                        return (
                            <Link
                                to={`movies/${movie.imdbID}`}
                                className='movie_link'
                                key={movie.imdbID}
                            >
                            <Cards
                                key={movie.imdbID}
                                image={movie.Poster}
                                title={movie.Title}
                                year={movie.Year}
                            />
                            </Link>
                        )
                    })}
                </div>
            ) : (
                <div className='search_error'>
                    <p> Search a movie! Try Star Wars, for example!</p>
                </div>
            )}
        </div>
    )
}

export default Home