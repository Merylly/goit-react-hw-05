import { useEffect, useState } from "react";
import { fetchDefaultMovies, fetchMoviesByQuery } from "../services/api";
import { useSearchParams } from "react-router-dom";

const useMovieSearch = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  const [searchMovies, setSearchMovies] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

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
    setSearchParams({ query: formData });
  };

  return { trendMovies, searchMovies, loader, error, onHandleSearch };
};

export default useMovieSearch;
