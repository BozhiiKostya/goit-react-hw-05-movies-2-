import axios from 'axios';

const API_KEY = 'fa42f2bd3305fcbb3d1b19c000cd2898';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTQyZjJiZDMzMDVmY2JiM2QxYjE5YzAwMGNkMjg5OCIsInN1YiI6IjY1MDM2MWNhZDdkY2QyMDBlMmZlNjUwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pwh0OBvlMGky0r1411OGVYwkh9h9jzFoNtHWzyCNdIM',
  },
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/all/day?api_key=${API_KEY}`,
    options
  );
  return response.data;
};

export const fetchDetailsMovies = async movie_id => {
  const response = await axios.get(
    `/movie/${movie_id}?api_key=${API_KEY}`,
    options
  );
  return response.data;
};

export const fetchSearchMovies = async searchQuery => {
  const response = await axios.get(
    `/search/movie?query=${searchQuery}&include_adult=false&page=1&api_key=${API_KEY}`,
    options
  );
  return response.data.results;
};

export const fetchCastMovies = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`,
    options
  );
  return response.data.cast;
};

export const fetchReviewsMovies = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`,
    options
  );
  return response.data.results;
};
