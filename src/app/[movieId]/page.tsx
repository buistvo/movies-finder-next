import { MoviesService } from '@/services/movies.service';
import Link from 'next/link';
import Image from 'next/image';
import { AppLogo } from '@/components/AppLogo/AppLogo';
import { MovieDetails } from '@/components/MovieDetails/MovieDetails';
import { redirect } from 'next/navigation';
import MovieList from '@/components/MovieList/MovieList';
export default async function Page({
  params,
  searchParams,
}: {
  params: { movieId: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  const movie = await new MoviesService()
    .getById(params.movieId)
    .catch((err) => redirect('/'));
  const movies = await new MoviesService().getAll({
    search: searchParams?.query,
    searchBy: 'title',
    sortBy: searchParams?.sortBy || 'title',
    sortOrder: 'asc',
    filter: searchParams?.genre,
  });
  return (
    <div>
      <div className="bg-workspace relative p-4 mb-4">
        <div className="flex justify-between relative z-10 pt-4 pr-8 pl-8">
          <AppLogo />
          <Link
            href={{
              pathname: '/',
              query: searchParams,
            }}
          >
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
      <MovieList
        total={movies.totalAmount}
        movies={movies.data}
        genre={searchParams?.genre || ''}
        searchParams={searchParams}
      ></MovieList>
    </div>
  );
}
