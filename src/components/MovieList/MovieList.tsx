import { GENRE_LIST_OPTIONS } from '@/constants/genre-list-options';
import { GenreSelect } from '../GenreSelect/GenreSelect';
import { MovieTile } from '../MovieTile/MovieTile';
import { Movie } from '@/types/movie';
interface MovieListParams {
  genre: string;
  movies: Movie[];
  total: number;
  searchParams?: { [key: string]: string | undefined };
}

export default function MovieList({
  genre,
  movies,
  total,
  searchParams,
}: MovieListParams) {
  return (
    <div className="bg-workspace">
      <GenreSelect
        initialSelectedGenre={genre || ''}
        genreList={GENRE_LIST_OPTIONS}
      ></GenreSelect>
      {total} MOVIES FOUND
      <div className="bg-workspace flex flex-wrap mt-2">
        {movies.map((movie) => (
          <MovieTile
            searchParams={searchParams}
            key={movie.id}
            movie={movie}
          ></MovieTile>
        ))}
      </div>
    </div>
  );
}
