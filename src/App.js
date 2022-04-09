import {React, useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

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

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
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
            <div className="container">
                <div className="movie">
                    <div>
                        <p>
                            {movie1.Year}
                        </p>
                    </div>
                    <div>
                        <img 
                            src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
                            alt={movie1.Title} 
                        />
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;

