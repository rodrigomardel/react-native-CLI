import { AxiosAdapter } from "./http/axios.adapter";

/**
 * Configured HTTP adapter instance to connect to TMDB API
 * Includes base URL, API key and default language configuration
 */
export const movieDbAdapter = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'c5fd9983dae35e603d45a8b5a31a8ee2',
    language: 'es',
  },
});