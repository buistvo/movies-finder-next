import { Movie } from '@/types/movie';
import { convertDuration } from '@/helpers/duration-converter';
import './MovieDetails';
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
    <div className="flex" data-testid="movie-details-container">
      <img className="h-96 w-64" alt={name} src={imageUrl} />
      <div className="flex flex-col p-8 items-start w-full min-w-500">
        <h2 className="font-light">
          {name}
          <span className="font-light text-xs py-2 px-4 ml-4 border border-secondary-text rounded-full inline-block w-12">
            {rating}
          </span>
        </h2>
        <span className="text-secondary-text text-sm font-medium">
          {genreList.join(', ')}
        </span>
        <div className="flex justify-between w-1/3 text-primary-red text-lg font-light">
          <span> {releaseDate?.getFullYear()}</span>
          <span>{convertDuration(duration)}</span>
        </div>
        <span className="text-secondary-text text-start mt-4">
          {description}
        </span>
      </div>
    </div>
  );
}
