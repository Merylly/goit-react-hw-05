const MovieList = ({ movies }) => {
  return (
    <ul>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
