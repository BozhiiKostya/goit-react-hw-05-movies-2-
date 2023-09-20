import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsMovies } from 'fatchApi';

const MovieReviews = () => {
  const [quiz, setQuiz] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetchReviewsMovies(movieId);

        setQuiz(response);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {quiz.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieReviews;
