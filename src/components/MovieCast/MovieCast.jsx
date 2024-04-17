import { useMovieDetails } from "../../hooks/useMovieDetails";

import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieCast, imgUrl } = useMovieDetails();

  return (
    <ul className={css.castList}>
      {Array.isArray(movieCast) &&
        movieCast.map((item) => {
          return (
            <li className={css.castItem} key={item.id}>
              <img
                className={css.image}
                src={`${imgUrl}${item.profile_path}`}
                alt={item.name}
              />
              <p className={css.text}>{item.name}</p>
              <p className={css.text}>• Character: {item.character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieCast;
