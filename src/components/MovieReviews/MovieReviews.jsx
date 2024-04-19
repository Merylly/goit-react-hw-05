import { useMovieDetails } from "../../hooks/useMovieDetails";

import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieReviews } = useMovieDetails();
  
  return (
    <ul className={css.reviewList}>
      {Array.isArray(movieReviews) && movieReviews.length > 0
        ? movieReviews.map((item) => {
            return (
              <li key={item.id}>
                <h3 className={css.title}>{item.author}</h3>
                <p className={css.text}>{item.content}</p>
              </li>
            );
          })
        : "No reviews yet."}
    </ul>
  );
};

export default MovieReviews;
