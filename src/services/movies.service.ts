import { MovieQueryParams, MoviesResponse } from '../types/movies-response';
import { PaginatedResponse } from '../types/paginated-response';
import { Movie } from '../types/movie';

export class MoviesService {
  // async getAll(
  //   params?: MovieQueryParams,
  //   cancellationToken?: CancelTokenSource
  // ): Promise<PaginatedResponse<Movie[]>> {
  //   const response = await axios.get<PaginatedResponse<MoviesResponse[]>>(
  //     'http://localhost:4000/movies',
  //     {
  //       cancelToken: cancellationToken?.token,
  //       params,
  //     }
  //   );
  //   return {
  //     ...response.data,
  //     data: response.data.data.map((movie) => this.mapResponse(movie)),
  //   };
  // }

  async getById(id: string): Promise<Movie> {
    console.log('getById', id);
    const response = await fetch(`http://localhost:4000/movies/${id}`, {
      method: 'GET',
    });
    const responseData: MoviesResponse = await response.json();

    return this.mapResponse(responseData);
  }

  // async create(
  //   movie: Movie,
  //   cancellationToken?: CancelTokenSource
  // ): Promise<Movie> {
  //   const response = await axios.post<MoviesResponse>(
  //     `http://localhost:4000/movies/`,
  //     {
  //       cancelToken: cancellationToken?.token,
  //       ...this.mapToRequest(movie),
  //     }
  //   );
  //   return this.mapResponse(response.data);
  // }

  // async update(
  //   movie: Movie,
  //   cancellationToken?: CancelTokenSource
  // ): Promise<Movie> {
  //   const response = await axios.put<MoviesResponse>(
  //     `http://localhost:4000/movies/`,
  //     {
  //       cancelToken: cancellationToken?.token,
  //       ...this.mapToRequest(movie),
  //     }
  //   );
  //   return this.mapResponse(response.data);
  // }

  mapResponse(response: MoviesResponse): Movie {
    return {
      id: response.id || 0,
      imageUrl: response.poster_path,
      name: response.title,
      releaseDate: new Date(response.release_date),
      genreList: response.genres,
      rating: response.vote_average,
      duration: response.runtime,
      description: response.overview,
    };
  }

  mapToRequest(movie: Movie): MoviesResponse {
    return {
      genres: movie.genreList,
      id: movie.id,
      overview: movie.description,
      poster_path: movie.imageUrl,
      release_date: movie.releaseDate.toISOString(),
      runtime: movie.duration,
      title: movie.name,
      vote_average: movie.rating || 0,
    };
  }
}
