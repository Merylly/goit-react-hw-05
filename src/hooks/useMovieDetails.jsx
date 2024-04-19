import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReviews,
} from "../services/api";

export const useMovieDetails = () => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const defaultImg =
    "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png";
  const defaultMovieImg =
    "https://cdn.pixabay.com/photo/2013/07/13/12/33/charlie-159860_960_720.png";
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

  return {
    movieDetails,
    movieCast,
    movieReviews,
    loader,
    error,
    imgUrl,
    defaultImg,
    defaultMovieImg,
  };
};
