import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { Movie } from "../../entities/movie.entity";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

/**
 * Use case that retrieves top rated movies from TMDB API
 * @param fetcher - HTTP adapter to perform requests
 * @returns Promise with array of Movie domain entities
 * @throws Error if HTTP request fails
 */
export const topRatedUseCase = async (fetcher: HttpAdapter) : Promise<Movie[]> => {

  try {
    const topRatedMovies = await fetcher.get<MovieDBMoviesResponse>('/top_rated');
    return topRatedMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching top rated movies');
  }
};