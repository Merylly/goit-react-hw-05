import axios from "axios";

const ACCESS_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDQ2MWNjMGM1YWFkMzNhMzkwYTM0Y2FmNWRiM2I5OSIsInN1YiI6IjY2MTI5ZDgxMTk2OTBjMDE0OWEzMDdlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._NwiSOasO_CXvSeNlSS7iws4O-DkePj2B7plqFETfjA";
const API_KEY = "ad461cc0c5aad33a390a34caf5db3b99";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { Authorization: ACCESS_TOKEN },
  params: {
    language: "en-US",
    api_key: API_KEY,
  },
});

export const fetchDefaultMovies = async () => {
  const { data } = await instance.get("trending/movie/day");
  return data;
};

export const fetchMoviesByQuery = async (query) => {
  const { data } = await instance.get(`/search/movie?query=${query}`);
  return data;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  const { cast } = data;
  return cast;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  return data.results;
};
