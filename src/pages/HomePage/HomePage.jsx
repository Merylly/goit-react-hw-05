import MovieList from "../../components/MovieList";
import Loader from "../../components/Loader";
import useMovieSearch from "../../hooks/useMovieSearch";
import ErrorMessage from "../../components/ErrorMessage";

const HomePage = () => {
  const { trendMovies, loader, error } = useMovieSearch();
  return (
    <div>
      <h1>Trending Today</h1>
      {error && <ErrorMessage />}
      {loader && <Loader />}
      <MovieList movies={trendMovies} />
    </div>
  );
};

export default HomePage;
