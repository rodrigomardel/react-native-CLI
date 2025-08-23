import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { Movie } from "../../entities/movie.entity";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

/**
 * Use case that retrieves movies upcoming from TMDB API
 * @param fetcher - HTTP adapter to perform requests
 * @returns Promise with array of Movie domain entities
 * @throws Error if HTTP request fails
 */
export const upcomingUseCase = async (fetcher: HttpAdapter) : Promise<Movie[]> => {

  try {
    const upcomingMovies = await fetcher.get<MovieDBMoviesResponse>('/upcoming');
    return upcomingMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching upcoming movies');
  }
};