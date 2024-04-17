import { useMovieDetails } from "../hooks/useMovieDetails";

const MovieCast = () => {
  const { movieCast, imgUrl } = useMovieDetails();

  return (
    <div>
      <ul>
        {Array.isArray(movieCast) &&
          movieCast.map((item) => {
            return (
              <li key={item.id}>
                <img src={`${imgUrl}${item.profile_path}`} alt={item.name} />
                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieCast;
