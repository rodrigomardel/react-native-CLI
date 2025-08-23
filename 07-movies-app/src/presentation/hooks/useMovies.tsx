import { useEffect, useState } from "react";
import { AxiosAdapter } from "../../config/adapters/http/axios.adapter";
import { nowPlayingUseCase } from "../../core/use-cases/movies/now-playing.use-case";
import { Movie } from "../../core/entities/movie.entity";

import * as UseCases from '../../core/use-cases';
import { movieDbAdapter } from "../../config/adapters/movie-db.adapter";

/**
 * Custom hook that manages state and loading of movies currently in theaters
 * @returns Object with loaded movies and loading state
 */
export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  /**
   * Function that loads movies currently in theaters using the use case
   */
  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.nowPlayingUseCase(movieDbAdapter);
    const upcomingPromise = UseCases.upcomingUseCase(movieDbAdapter);
    const popularPromise = UseCases.popularUseCase(movieDbAdapter);
    const topRatedPromise = UseCases.topRatedUseCase(movieDbAdapter);

    const [nowPlayingMovies, upcomingMovies, popularMovies, topRatedMovies] = await Promise.all([nowPlayingPromise, upcomingPromise, popularPromise, topRatedPromise]);

    setNowPlayingMovies(nowPlayingMovies);
    setUpcomingMovies(upcomingMovies);
    setPopularMovies(popularMovies);
    setTopRatedMovies(topRatedMovies);

    setIsLoading(false);

    console.log({nowPlayingMovies, upcomingMovies, popularMovies, topRatedMovies});
  }

  return { nowPlayingMovies, upcomingMovies, popularMovies, topRatedMovies, isLoading };
};