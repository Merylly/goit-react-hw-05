import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";
import { fetchDefaultMovies } from "../../services/api";
import Loader from "../../components/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoader(true);
        const data = await fetchDefaultMovies();
        setMovies(data.results);
      } catch {
        console.error;
      } finally {
        setLoader(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      {loader && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
