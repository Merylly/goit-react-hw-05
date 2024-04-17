import { useMovieDetails } from "../hooks/useMovieDetails";

const MovieReviews = () => {
  const { movieReviews } = useMovieDetails();
  return (
    <ul>
      {Array.isArray(movieReviews) &&
        movieReviews.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieReviews;
