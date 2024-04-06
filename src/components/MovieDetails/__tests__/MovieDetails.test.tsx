import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MovieDetails } from '../MovieDetails';
import { MOVIE_MOCK } from '../../../mocks/movie';
import { convertDuration } from '../../../helpers/duration-converter';

const mockMovie = MOVIE_MOCK;

describe('MovieDetails component', () => {
  it('renders movie details correctly', () => {
    const { getByText, getByAltText } = render(
      <MovieDetails movie={mockMovie} />
    );

    expect(getByText(mockMovie.name)).toBeInTheDocument();
    expect(getByText(mockMovie.rating!.toString())).toBeInTheDocument();
    expect(getByText(mockMovie.genreList.join(', '))).toBeInTheDocument();
    expect(getByText(mockMovie.releaseDate.getFullYear())).toBeInTheDocument();
    expect(getByText(convertDuration(mockMovie.duration))).toBeInTheDocument();
    expect(getByText(mockMovie.description)).toBeInTheDocument();

    const movieImage = getByAltText(mockMovie.name);
    expect(movieImage).toBeInTheDocument();
    expect(movieImage).toHaveAttribute('src', mockMovie.imageUrl);
  });
});
