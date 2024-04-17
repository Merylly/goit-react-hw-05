import SearchForm from "../../components/SearchForm";
import MovieList from "../../components/MovieList";
import Loader from "../../components/Loader";
import { Toaster } from "react-hot-toast";
import useMovieSearch from "../../hooks/useMovieSearch";
import ErrorMessage from "../../components/ErrorMessage";

const MoviesPage = () => {
  const { searchMovies, loader, error, onHandleSearch } = useMovieSearch();

  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <SearchForm onHandleSearch={onHandleSearch} />
      {searchMovies && <MovieList movies={searchMovies} />}
      <Toaster />
    </div>
  );
};

export default MoviesPage;
