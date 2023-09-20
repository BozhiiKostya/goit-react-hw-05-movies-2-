import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../Home/Home';
import { fetchTrendingMovies } from '../../fatchApi';

const Home = () => {
  const [quiz, setQuiz] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const getTrending = async () => {
      try {
        const response = await fetchTrendingMovies();
        setQuiz(response);
      } catch (error) {
        console.log(error);
      }
    };
    getTrending();
  }, []);

  return (
    <Container>
      {quiz && (
        <>
          <h1>Trending today</h1>
          <ul>
            {quiz.results.map(item => {
              return item.title ? (
                <li key={item.id}>
                  <Link to={`/movies/${item.id}`} state={{ from: location }}>
                    {item.title}
                  </Link>
                </li>
              ) : null;
            })}
          </ul>
        </>
      )}
    </Container>
  );
};

export default Home;
