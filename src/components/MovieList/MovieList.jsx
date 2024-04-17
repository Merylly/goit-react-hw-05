import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const { imgUrl } = useMovieDetails();

  return (
    <ul className={css.moviesList}>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <Link className={css.link} key={movie.id} state={location} to={`/movies/${movie.id}`}>
              <li className={css.movieItem}>
                <div className={css.imageWrap}>
                  <img
                    className={css.movieImage}
                    src={`${imgUrl}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <h2 className={css.movieTitle}>{movie.title}</h2>
              </li>
            </Link>
          );
        })}
    </ul>
  );
};

export default MovieList;
