
import { likeRef, dislikeRef } from './FirebaseConfig';
import { addDoc } from 'firebase/firestore';

function DisplayMovies({ movies }) {

    const handleLikeClick = async (title) => {
        await addDoc(likeRef, { title });
    };

    const handleDislikeClick = async (title) => {
        await addDoc(dislikeRef, { title });
    };

    return (
        <div className="movie-list">
            <ul>
                {movies.titles.map((title, index) => (
                    <li key={index} className='movie-item'>
                        <img src={`https://image.tmdb.org/t/p/w500${movies.posters[index]}`} alt={title} />
                        <div className="movie-details">
                            <button className="like-button" onClick={() => handleLikeClick(title)}>
                                Like
                            </button>
                            <button className="dislike-button" onClick={() => handleDislikeClick(title)}>
                                Dislike
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayMovies;
