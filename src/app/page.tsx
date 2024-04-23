import { AppLogo } from '@/components/AppLogo/AppLogo';
import MovieList from '@/components/MovieList/MovieList';
import { SearchForm } from '@/components/SearchForm/SearchForm';
import { MoviesService } from '@/services/movies.service';

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const movies = await new MoviesService().getAll({
    search: searchParams?.query,
    searchBy: 'title',
    sortBy: searchParams?.sortBy || 'title',
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
          <SearchForm query={searchParams?.query || ''}></SearchForm>
        </div>
      </div>
      <MovieList
        total={movies.totalAmount}
        movies={movies.data}
        genre={searchParams?.genre || ''}
        searchParams={searchParams}
      ></MovieList>
    </div>
  );
}
