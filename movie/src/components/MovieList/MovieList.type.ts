export type TMovie = {
  id: number;
  title: string;
  genres: string[];
  posterPath: string;
  releaseDate: string;
};

export type TMovieList = TMovie[];
