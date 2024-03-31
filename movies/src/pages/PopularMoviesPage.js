import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import { getPopularMovies } from "../api/tmdb-api"; 
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useMovies } from "../contexts/moviesContext";

const PopularMoviesPage = () => {
  const { data: popularMovies = [], isLoading, isError } = useQuery('popularMovies', getPopularMovies);
  const { addToMustWatch } = useMovies();

  const handleAddToMustWatch = (movie) => {
    addToMustWatch(movie); 
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <PageTemplate
      title="Popular Movies"
      movies={popularMovies}
      action={(movie) => <PlaylistAddIcon  onClick={() => handleAddToMustWatch(movie)}/>}
    />
  );
};

export default PopularMoviesPage;