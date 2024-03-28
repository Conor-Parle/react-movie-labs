import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api"; 

const UpcomingMoviesPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies().then(upcomingMovies => {
      const moviesWithFavorites = upcomingMovies.map(movie => ({
        ...movie,
        favorite: false
      }));
      setUpcomingMovies(moviesWithFavorites);
    });
  }, []);
  
  const addToFavorites = (movieId) => {
    const updatedMovies = upcomingMovies.map((movie) =>
      movie.id === movieId ? { ...movie, favorite: true } : movie
    );
    setUpcomingMovies(updatedMovies);
  };

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={upcomingMovies}
      selectFavorite={addToFavorites} 
    />
  );
};

export default UpcomingMoviesPage;
