import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCastMovies } from 'fatchApi';
import img from '../../images/foto-empty.png';

const MovieCast = () => {
  const [quiz, setQuiz] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await fetchCastMovies(movieId);
        setQuiz(response);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      {quiz.length !== 0 ? (
        <ul>
          {quiz.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : img
                  }
                  alt={name}
                  width="150"
                />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p
          style={{
            fontSize: '20px',
          }}
        >
          We don't have any cast for this movie.
        </p>
      )}
    </div>
  );
};

export default MovieCast;
