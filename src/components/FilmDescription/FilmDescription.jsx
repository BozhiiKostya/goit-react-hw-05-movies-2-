import { Container, Image } from './FilmDescription.styled';

const FilmDescription = ({ about }) => {
  const { poster_path, title, overview, vote_average, genres } = about;

  return (
    <Container>
      <Image
        src={
          poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : ''
        }
        alt={title}
        height="300"
      />

      <div>
        <h1>{title}</h1>
        <p>User Score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres &&
            genres.map(({ id, name }) => (
              <span key={id}>{`${name}  ${' '}`}</span>
            ))}
        </p>
      </div>
    </Container>
  );
};

export default FilmDescription;
