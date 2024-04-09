import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm";
import { fetchMoviesByQuery } from "../../services/api";
import MovieList from "../../components/MovieList";
import Loader from "../../components/Loader";
import { Toaster } from "react-hot-toast";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const onSearchMovies = async (query) => {
      if (!query) return;

      try {
        setLoader(true);
        const data = await fetchMoviesByQuery(query);
        setMovies(data);
        console.log(data);
      } catch {
        console.error;
      } finally {
        setLoader(false);
      }
    };

    onSearchMovies();
  }, [query]);

  const onHandleSearch = (formData) => {
    setQuery(formData);
  };

  return (
    <div>
      {loader && <Loader />}
      <SearchForm onHandleSearch={onHandleSearch} />
      {movies && <MovieList movies={movies} />}
      <Toaster />
    </div>
  );
};

export default MoviesPage;
