import { Suspense, lazy, useRef } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Loader from "../../components/Loader";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import ErrorMessage from "../../components/ErrorMessage";

const MovieCast = lazy(() => import("../../components/MovieCast"));
const MovieReviews = lazy(() => import("../../components/MovieReviews"));

const MovieDetailsPage = () => {
  const { movieDetails, loader, error, imgUrl } = useMovieDetails();

  const location = useLocation();
  const backLink = useRef(location.state ?? "/");

  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <Link to={backLink.current}>Go back</Link>
      {movieDetails && (
        <div>
          <h1>{movieDetails.title}</h1>
          <img
            src={`${imgUrl}${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <p>User score: {movieDetails.vote_average}</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>{movieDetails.genres.map((item) => item.name).join(" ")}</p>
        </div>
      )}
      <h3>Additional information</h3>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/cast" element={<MovieCast />} />
          <Route path="/reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
