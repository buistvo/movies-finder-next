import { Movie } from '@/types/movie';
import {
  MovieDetailsContainer,
  InfoContainer,
  InfoHeader,
  Rating,
  Genre,
  AdditionalInfo,
  Description,
} from './MovieDetails.styled';
import { convertDuration } from '@/helpers/duration-converter';

interface MovieDetailsProps {
  movie: Movie;
}

export function MovieDetails({ movie }: MovieDetailsProps) {
  const {
    name,
    imageUrl,
    rating,
    genreList,
    releaseDate,
    description,
    duration,
  } = movie;
  return (
    <MovieDetailsContainer data-testid="movie-details-container">
      <img
        className="min-w-250 min-h-350 w-250 h-350"
        alt={name}
        src={imageUrl}
      />
      <InfoContainer>
        <InfoHeader>
          {name} <Rating>{rating}</Rating>
        </InfoHeader>
        <Genre>{genreList.join(', ')}</Genre>
        <AdditionalInfo>
          <span> {releaseDate?.getFullYear()}</span>
          <span>{convertDuration(duration)}</span>
        </AdditionalInfo>
        <Description>{description}</Description>
      </InfoContainer>
    </MovieDetailsContainer>
  );
}
