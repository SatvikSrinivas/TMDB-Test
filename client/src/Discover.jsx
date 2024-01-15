import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayMovies from './DisplayMovies';

function Discover() {
    const [movies, setMovies] = useState(null);

    const getMovies = async () => {
        try {
            const response = await axios.get('./discover');
            return response.data;
        } catch (error) {
            // Handle errors
            console.error('Error:', error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const moviesData = await getMovies();
                setMovies(moviesData);
            } catch (error) {
                // Handle errors
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    if (movies) {
        console.log('movies --> ', movies);
        return (
            <div className='App'>
                <h1>Discover Movies</h1>
                <div className="button">
                    <DisplayMovies movies={movies} />
                </div>
            </div>
        );
    }

    return <>Please wait...</>;
}

export default Discover;
