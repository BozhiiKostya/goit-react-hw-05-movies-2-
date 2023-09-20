import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { fetchDetailsMovies } from 'fatchApi';
import FilmDescription from 'components/FilmDescription/FilmDescription';
import { Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const [quiz, setQuiz] = useState({});

  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getDetails = async () => {
      try {
        const response = await fetchDetailsMovies(movieId);

        if (response.id) {
          setQuiz(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, [movieId]);

  console.log(location);

  return (
    <Container>
      <Link to={location.state?.from ?? '/movies'}>
        <FiChevronLeft />
        Go back
      </Link>
      <FilmDescription about={quiz} />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
