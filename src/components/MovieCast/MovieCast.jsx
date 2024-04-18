import { useMovieDetails } from "../../hooks/useMovieDetails";

import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieCast, imgUrl, defaultImg } = useMovieDetails();

  return (
    <ul className={css.castList}>
      {Array.isArray(movieCast) &&
        movieCast.map((item) => {
          return (
            <li className={css.castItem} key={item.id}>
              <div className={css.wrapper}>
                <img
                  className={css.image}
                  src={
                    item.profile_path
                      ? `${imgUrl}${item.profile_path}`
                      : defaultImg
                  }
                  alt={item.name}
                />
              </div>
              <p className={css.text}>{item.name}</p>
              <p className={css.text}>• Character: {item.character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieCast;
