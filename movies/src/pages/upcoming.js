import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import { getUpcomingMovies } from "../api/tmdb-api"; 
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const UpcomingMoviesPage = () => {
  const { data: upcomingMovies = [], isLoading, isError } = useQuery('upcomingMovies', getUpcomingMovies);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={upcomingMovies}
      action={(movie) => <PlaylistAddIcon />}
    />
  );
};

export default UpcomingMoviesPage;

