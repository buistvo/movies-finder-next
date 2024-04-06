import { AppLogo } from '@/components/AppLogo/AppLogo';
import { GenreSelect } from '@/components/GenreSelect/GenreSelect';
import { MovieTile } from '@/components/MovieTile/MovieTile';
import { SearchForm } from '@/components/SearchForm/SearchForm';
import { GENRE_LIST_OPTIONS } from '@/constants/genre-list-options';
import { MoviesService } from '@/services/movies.service';
import { useSearchParams } from 'next/navigation';

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const movies = await new MoviesService().getAll({
    search: searchParams?.query,
    searchBy: 'title',
    sortBy: 'title',
    sortOrder: 'asc',
    filter: searchParams?.genre,
  });
  return (
    <div>
      <div className="container-with-background">
        <div className="flex flex-row justify-between relative z-10 pt-4 pr-8 pl-8">
          <AppLogo />
          <button className="bg-backgroundAA text-primary-red hover:bg-workspaceBB">
            + ADD MOVIE
          </button>
        </div>
        <div className="relative z-10">
          <SearchForm></SearchForm>
        </div>
      </div>
      <div>
        <GenreSelect
          initialSelectedGenre={searchParams?.genre || ''}
          genreList={GENRE_LIST_OPTIONS}
        ></GenreSelect>
      </div>
      <div className="bg-workspace flex flex-wrap mt-2">
        {movies.data.map((movie) => (
          <MovieTile key={movie.id} movie={movie}></MovieTile>
        ))}
      </div>
    </div>
  );
}
