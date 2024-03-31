import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import { getTopRatedMovies } from "../api/tmdb-api"; 
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useMovies } from "../contexts/moviesContext";

const TopRatedMoviesPage = () => {
  const { data: topRatedMovies = [], isLoading, isError } = useQuery('topRatedMovies', getTopRatedMovies);
  const { addToMustWatch } = useMovies();

  const handleAddToMustWatch = (movie) => {
    addToMustWatch(movie); 
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={topRatedMovies}
      action={(movie) => <PlaylistAddIcon  onClick={() => handleAddToMustWatch(movie)}/>}
    />
  );
};

export default TopRatedMoviesPage;
