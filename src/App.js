import {React, useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';
// OMDb key: be87e53e
// TODO: move that to .env

const API_URL = 'https://www.omdbapi.com?apikey=be87e53e';

const movie1 = {
    "Title": "Popeye the Sailor",
    "Year": "1960–1962",
    "imdbID": "tt0145628",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWM5MDUwZDktZDlmMi00M2ZkLWFjN2YtZmRmZDFjZTc0NWZiXkEyXkFqcGdeQXVyMzI4MTk3MTY@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies ] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=> {
        searchMovies('Popeye');
    }, [])
    return (
        <div className="app">
            <h1>MovieHut</h1>
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search 4 Moviez"
                    value="Popeye"
                    onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt="Search" 
                    onClick={()=> {}}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : 
                    (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }
            
        </div>
    );
}

export default App;

