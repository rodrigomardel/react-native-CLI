import { Movie } from "../../core/entities/movie.entity";
import { Result } from "../interfaces/movie-db.responses";

/**
 * Class responsible for transforming TMDB API data to domain entity format
 */
export class MovieMapper {
  /**
   * Converts a TMDB API result to a Movie domain entity
   * @param result - Result object from TMDB API
   * @returns Movie domain entity with complete URLs and standardized format
   */
  static fromMovieDBResultToEntity( result: Result  ): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date( result.release_date ),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${ result.poster_path }`,
      backdrop: `https://image.tmdb.org/t/p/w500${ result.backdrop_path }`,
    } 
  }

}