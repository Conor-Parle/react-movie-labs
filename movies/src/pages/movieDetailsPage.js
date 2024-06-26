import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieRecommendations, getMovieCredits } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner'


const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data: recommendations, isLoading: recommendationsLoading, isError: recommendationsError } = useQuery(
    ["recommendations", { id: id }],
    getMovieRecommendations
  );

  const { data: credits, isLoading: creditsLoading, isError: creditsError } = useQuery(
    ["credits", { id: id }],
    getMovieCredits
  );

  if (isLoading || recommendationsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (recommendationsError) {
    return <h1>Error fetching recommendations</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <div>
              <h2>Recommended Movies</h2>
              <ul>
                {recommendations.map(recommendation => (
                  <li key={recommendation.id}>{recommendation.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Cast</h2>
              <ul>
                {credits.cast.map(member => (
                  <li key={member.id}>{member.name} as {member.character}</li>
                ))}
              </ul>
              <h2>Crew</h2>
              <ul>
                {credits.crew.map(member => (
                  <li key={member.id}>{member.name} ({member.job})</li>
                ))}
              </ul>
            </div>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;