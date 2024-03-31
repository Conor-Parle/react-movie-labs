import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieRecommendations } from '../api';

const MovieRecommendationsPage = () => {
    const { id } = useParams();
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
          const recommendationsData = await fetchMovieRecommendations(id);
          setRecommendations(recommendationsData);
        };

        fetchRecommendations();
    }, [id]);

    return (
        <div>
          <h1>Movie Recommendations</h1>
          <ul>
            {recommendations.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      );
    };

    export default MovieRecommendationsPage;
