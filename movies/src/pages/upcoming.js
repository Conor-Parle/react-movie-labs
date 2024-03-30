import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import { getUpcomingMovies } from "../api/tmdb-api"; 
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const UpcomingMoviesPage = () => {
  const { data: upcomingMovies = [], isLoading, isError } = useQuery('upcomingMovies', getUpcomingMovies);

  const addToFavorites = (movieId) => {
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcomingMovies}
      action={(movie) => <AddToFavoritesIcon movie={movie} />} // Specify action prop to render AddToFavoritesIcon
    />
  );
};

export default UpcomingMoviesPage;

