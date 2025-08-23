import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { Movie } from "../../entities/movie.entity";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";

/**
 * Use case that retrieves popular movies from TMDB API
 * @param fetcher - HTTP adapter to perform requests
 * @returns Promise with array of Movie domain entities
 * @throws Error if HTTP request fails
 */
export const popularUseCase = async (fetcher: HttpAdapter) : Promise<Movie[]> => {

  try {
    const popularMovies = await fetcher.get<MovieDBMoviesResponse>('/popular');
    return popularMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching popular movies');
  }
};