import { Toaster } from "react-hot-toast";

import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import useMovieSearch from "../../hooks/useMovieSearch";

import css from './MoviesPage.module.css'


const MoviesPage = () => {
  const { searchMovies, loader, error, onHandleSearch } = useMovieSearch();

  return (
    <div className={css.search}>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <SearchForm onHandleSearch={onHandleSearch} />
      {searchMovies && <MovieList movies={searchMovies} />}
      <Toaster />
    </div>
  );
};

export default MoviesPage;
