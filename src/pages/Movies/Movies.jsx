import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchSearchMovies } from '../../fatchApi';
import { Button, Container, Form, Input } from '../Movies/Movies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  const uniqueMovies = movies.filter(
    (movie, index, self) =>
      index === self.findIndex(m => m.title === movie.title)
  );
  const filterMovie = uniqueMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      return;
    }
    const getSearchMovies = async () => {
      try {
        const response = await fetchSearchMovies(searchQuery);
        setMovies(response);
        if (response.length === 0) {
          toast.error('Sorry, nothing was found!');
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (searchQuery) {
      getSearchMovies();
    }
  }, [searchQuery]);

  return (
    <Container>
      <Form
        onSubmit={evt => {
          evt.preventDefault();
          setSearchParams({ query: evt.target.elements.input.value });
          evt.target.reset();
        }}
      >
        <Input
          name="input"
          type="text"
          placeholder="Search movie..."
          required
        />
        <Button>Search</Button>
        {movies.length > 0 ? (
          <ul>
            {filterMovie.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        ) : null}
      </Form>
      <Toaster />
    </Container>
  );
};

export default Movies;
