import { useEffect, useState } from "react";
import { fetchDefaultMovies, fetchMoviesByQuery } from "../services/api";

const useMovieSearch = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  const [searchMovies, setSearchMovies] = useState(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setLoader(true);

      try {
        const data = await fetchDefaultMovies();
        setTrendMovies(data.results);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    getTrendingMovies();
  }, []);

  useEffect(() => {
    const onSearchMovies = async () => {
      if (!query) return;
      setLoader(true);

      try {
        const data = await fetchMoviesByQuery(query);
        console.log(data.results);
        setSearchMovies(data.results);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    onSearchMovies();
  }, [query]);

  const onHandleSearch = (formData) => {
    setQuery(formData);
  };

  return { trendMovies, searchMovies, loader, error, onHandleSearch };
};

export default useMovieSearch;
