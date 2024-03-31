import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import { getNowPlayingMovies } from "../api/tmdb-api"; 
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useMovies } from "../contexts/moviesContext";

const NowPlayingMoviesPage = () => {
  const { data: nowPlayingMovies = [], isLoading, isError } = useQuery('nowPlayingMovies', getNowPlayingMovies);
  const { addToMustWatch } = useMovies();

  const handleAddToMustWatch = (movie) => {
    addToMustWatch(movie); 
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={nowPlayingMovies}
      action={(movie) => <PlaylistAddIcon  onClick={() => handleAddToMustWatch(movie)}/>}
    />
  );
};

export default NowPlayingMoviesPage;
