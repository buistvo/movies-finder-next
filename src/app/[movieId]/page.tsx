import { MoviesService } from '@/services/movies.service';
import Link from 'next/link';
import Image from 'next/image';
import { AppLogo } from '@/components/AppLogo/AppLogo';
import { MovieDetails } from '@/components/MovieDetails/MovieDetails';
import { MovieTile } from '@/components/MovieTile/MovieTile';
import { GenreSelect } from '@/components/GenreSelect/GenreSelect';
import { GENRE_LIST_OPTIONS } from '@/constants/genre-list-options';
export default async function Page({
  params,
  searchParams,
}: {
  params: { movieId: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  const movie = await new MoviesService().getById(params.movieId);
  const movies = await new MoviesService().getAll({
    search: searchParams?.query,
    searchBy: 'title',
    sortBy: 'title',
    sortOrder: 'asc',
    filter: searchParams?.genre,
  });
  return (
    <div>
      <div className="bg-workspace relative p-4 mb-4">
        <div className="flex justify-between relative z-10 pt-4 pr-8 pl-8">
          <AppLogo />
          <Link href={'/'}>
            <button className="bg-workspace text-primary-red hover:bg-gray-900">
              <Image
                alt="magnifying-icon"
                width={30}
                height={30}
                src="/images/svg/magnifying-glass-svgrepo-com.svg"
              />
            </button>
          </Link>
        </div>
        <MovieDetails movie={movie} />
      </div>
      <div className="bg-workspace">
        <GenreSelect
          initialSelectedGenre={searchParams?.genre || ''}
          genreList={GENRE_LIST_OPTIONS}
        ></GenreSelect>
        {movies.totalAmount} MOVIES FOUND
        <div className="bg-workspace flex flex-wrap mt-2">
          {movies.data.map((movie) => (
            <MovieTile key={movie.id} movie={movie}></MovieTile>
          ))}
        </div>
      </div>
    </div>
  );
}
