import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMovieDetails } from "../hooks/useMovieDetails";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const { imgUrl } = useMovieDetails();

  return (
    <ul>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <Link key={movie.id} state={location} to={`/movies/${movie.id}`}>
              <li>
                <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
                <h2>{movie.title}</h2>
              </li>
            </Link>
          );
        })}
    </ul>
  );
};

export default MovieList;
