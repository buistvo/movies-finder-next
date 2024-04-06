import { MoviesService } from '@/services/movies.service';
import Link from 'next/link';
import Image from 'next/image';
import { AppLogo } from '@/components/AppLogo/AppLogo';
import { MovieDetails } from '@/components/MovieDetails/MovieDetails';
export default async function Page({
  params,
}: {
  params: { movieId: string };
}) {
  const movie = await new MoviesService().getById(params.movieId);
  return (
    <div className="bg-gray-900 relative min-h-400 p-4 mb-4">
      <div className="flex justify-between relative z-10 pt-4 pr-8 pl-8">
        <AppLogo />
        <Link href={'/'}>
          <button className="bg-gray-900 text-red-500 hover:bg-gray-900">
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
  );
}
