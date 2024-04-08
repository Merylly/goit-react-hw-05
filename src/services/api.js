import axios from "axios";

const ACCESS_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDQ2MWNjMGM1YWFkMzNhMzkwYTM0Y2FmNWRiM2I5OSIsInN1YiI6IjY2MTI5ZDgxMTk2OTBjMDE0OWEzMDdlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._NwiSOasO_CXvSeNlSS7iws4O-DkePj2B7plqFETfjA";
// API Key: ad461cc0c5aad33a390a34caf5db3b99

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/11",
  headers: { Authorization: ACCESS_TOKEN },
});

export const fetchDefaultMovies = async () => {
  const response = await instance.get("", {
    params: { time_window: "day" },
  });
  console.log(response.data);
  return response.data;
};

export const fetchMoviesByQuery = async (query) => {
  const response = await instance.get("", { params: { query: query } });
  return response.data;
};
