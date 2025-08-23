import { AxiosAdapter } from "./http/axios.adapter";

export const movieDbAdapter = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'c5fd9983dae35e603d45a8b5a31a8ee2',
    language: 'es',
  },
});