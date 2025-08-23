import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { Movie } from "../../entities/movie.entity";

export const nowPlayingUseCase = async (fetcher: HttpAdapter) : Promise<Movie[]> => {

  try {
    const nowPlayingMovies = await fetcher.get<NowPlayingResponse>('/now_playing');
    console.log({nowPlayingMovies});
    return [];
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching now playing movies');
  }
};