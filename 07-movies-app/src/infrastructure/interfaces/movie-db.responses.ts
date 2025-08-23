/**
 * Complete TMDB API response for movies currently in theaters
 */
export interface NowPlayingResponse {
  /** Movie availability dates */
  dates:         Dates;
  /** Current page number */
  page:          number;
  /** List of movies currently in theaters */
  results:       Result[];
  /** Total number of available pages */
  total_pages:   number;
  /** Total number of available results */
  total_results: number;
}

/**
 * Complete TMDB API response for popular movies
 */
export interface MovieDBMoviesResponse {
  /** Current page number */
  page:          number;
  /** List of popular movies */
  results:       Result[];
  /** Total number of available pages */
  total_pages:   number;
  /** Total number of available results */
  total_results: number;
}




/**
 * Movie availability dates
 */
export interface Dates {
  /** Maximum availability date */
  maximum: Date;
  /** Minimum availability date */
  minimum: Date;
}

/**
 * Structure of an individual movie in the API response
 */
export interface Result {
  /** Indicates if it's adult content */
  adult:             boolean;
  /** Background image path */
  backdrop_path:     string;
  /** Movie genre IDs */
  genre_ids:         number[];
  /** Unique movie ID */
  id:                number;
  /** Original movie language */
  original_language: string;
  /** Original movie title */
  original_title:    string;
  /** Movie synopsis */
  overview:          string;
  /** Popularity score */
  popularity:        number;
  /** Movie poster path */
  poster_path:       string;
  /** Release date */
  release_date:      Date;
  /** Movie title */
  title:             string;
  /** Indicates if it's a video */
  video:             boolean;
  /** Average rating */
  vote_average:      number;
  /** Total number of votes */
  vote_count:        number;
}

