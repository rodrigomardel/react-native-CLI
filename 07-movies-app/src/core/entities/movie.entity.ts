/**
 * Entity that represents a movie in the application domain
 */
export interface Movie {
  /** Unique movie identifier */
  id: number;
  /** Movie title */
  title: string;
  /** Movie description or synopsis */
  description: string;
  /** Movie release date */
  releaseDate: Date;
  /** Average movie rating */
  rating: number;
  /** Complete URL of the movie poster */
  poster: string;
  /** Complete URL of the movie background image */
  backdrop: string;
}