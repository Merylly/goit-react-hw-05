import { Suspense, lazy, useRef } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useMovieDetails } from "../../hooks/useMovieDetails";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieDetails, loader, error, imgUrl } = useMovieDetails();

  const location = useLocation();
  const backLink = useRef(location.state ?? "/");

  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <Link className={css.button} to={backLink.current}>
        Go back
      </Link>
      {movieDetails && (
        <div className={css.wrapper}>
          <img
            className={css.image}
            src={`${imgUrl}${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div className={css.infoWrapper}>
            <h1 className={css.movieTitle}>{`${
              movieDetails.title
            } (${movieDetails.release_date.slice(0, 4)})`}</h1>
            <p className={css.text}>{`User score: ${Math.round(
              movieDetails.vote_average * 10
            )}%`}</p>
            <h2 className={css.underTitle}>Overview</h2>
            <p className={css.text}>{movieDetails.overview}</p>
            <h2 className={css.underTitle}>Genres</h2>
            <p className={css.text}>
              {movieDetails.genres.map((item) => item.name).join(" • ")}
            </p>
          </div>
        </div>
      )}
      <div className={css.addWrapper}>
        <h3 className={css.underTitle}>Additional information</h3>
        <Link className={css.link} to="cast">
          • Cast
        </Link>
        <Link className={css.link} to="reviews">
          • Reviews
        </Link>
      </div>
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
