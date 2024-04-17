import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReviews,
} from "../services/api";

export const useMovieDetails = () => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovieDatails = async () => {
      if (!movieId) return;
      setLoader(true);

      try {
        const data = await fetchMovieById(movieId);
        console.log(data);
        setMovieDetails(data);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    getMovieDatails();
  }, [movieId]);

  useEffect(() => {
    const getMovieCast = async () => {
      if (!movieId) return;
      setLoader(true);

      try {
        const data = await fetchMovieCast(movieId);
        console.log(data);
        setMovieCast(data);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    getMovieCast();
  }, [movieId]);

  useEffect(() => {
    const getMovieReviews = async () => {
      if (!movieId) return;
      setLoader(true);

      try {
        const data = await fetchMovieReviews(movieId);
        setMovieReviews(data);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return { movieDetails, movieCast, movieReviews, loader, error, imgUrl };
};
