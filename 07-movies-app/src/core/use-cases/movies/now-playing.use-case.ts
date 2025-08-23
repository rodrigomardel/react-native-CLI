import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { Movie } from "../../entities/movie.entity";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

/**
 * Use case that retrieves movies currently in theaters from TMDB API
 * @param fetcher - HTTP adapter to perform requests
 * @returns Promise with array of Movie domain entities
 * @throws Error if HTTP request fails
 */
export const nowPlayingUseCase = async (fetcher: HttpAdapter) : Promise<Movie[]> => {

  try {
    const nowPlayingMovies = await fetcher.get<NowPlayingResponse>('/now_playing');
    return nowPlayingMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching now playing movies');
  }
};