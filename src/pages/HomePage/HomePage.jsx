import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import useMovieSearch from "../../hooks/useMovieSearch";
import css from "./HomePage.module.css";

const HomePage = () => {
  const { trendMovies, loader, error } = useMovieSearch();

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending Today</h1>
      {error && <ErrorMessage />}
      {loader && <Loader />}
      <MovieList movies={trendMovies} />
    </div>
  );
};

export default HomePage;
