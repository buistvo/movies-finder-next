import { MoviesService } from '@/services/movies.service';
import Link from 'next/link';
import {
  DetailsContainer,
  SearchSwitcherButton,
  TopContainerHeader,
} from './MovieDetailsRoot.styled';
import { AppLogo } from '../components/AppLogo/AppLogo';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import Image from 'next/image';
export default async function Page({
  params,
}: {
  params: { movieId: string };
}) {
  const movie = await new MoviesService().getById(params.movieId);
  return (
    <DetailsContainer>
      <TopContainerHeader>
        <AppLogo />
        <Link href={'/'}>
          <SearchSwitcherButton>
            <Image
              alt="magnifying-icon"
              width={30}
              height={30}
              src="/images/svg/magnifying-glass-svgrepo-com.svg"
            />
          </SearchSwitcherButton>
        </Link>
      </TopContainerHeader>
      <MovieDetails movie={movie} />
    </DetailsContainer>
  );
}
