import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import { Context } from '../context/Context'
import noImageAvailable from '../img/noimageavailable.jpg'
import './Details_style.css'


const Details = () => {

    let {id} = useParams();
    const {movieDetails, selectedMovie} = useContext(Context);
    useEffect(() => {
        movieDetails(id);
    }, []);

    return (
        <div>
            <Header/>
        <section className='container_details'>
            <div className='movie_poster'>
                {selectedMovie.Poster === 'N/A' ? (
                    <img src={noImageAvailable} alt={selectedMovie.Title}/>
                ) : (
                    <img src={selectedMovie.Poster} alt={selectedMovie.Title}/>
                )}
            </div>
            <div className='movie_info'>
                <div className="label">
                    <p className="movie_title">{selectedMovie.Title}</p>
                </div>
                <div className="label">
                    <p className="movie_year"> Year of release: {selectedMovie.Year}</p>
                </div>
                <div className="label">
                    <p className="movie_runtime"> Runtime {selectedMovie.Runtime}</p>
                </div>
                <div className="label">
                    <p className="movie_genre"> Genre: {selectedMovie.Genre}</p>
                </div>
                <div className="label">
                    <p className="movie_language"> Language: {selectedMovie.Language}</p>
                </div>
                <div className="label">
                    <p className="movie_director"> Director: {selectedMovie.Director}</p>
                </div>
                <div className="label">
                    <p className="movie_actors"> Actors: {selectedMovie.Actors}</p>
                </div>
                <div className="label">
                    <p className="movie_plot">{selectedMovie.Plot}</p>
                </div>
                <div className="label">
                    <p className="movie_rating"> IMDB Rating: {selectedMovie.imdbRating}</p>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Details