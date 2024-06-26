import { MovieQueryParams, MoviesResponse } from '../types/movies-response';
import { PaginatedResponse } from '../types/paginated-response';
import { Movie } from '../types/movie';

export class MoviesService {
  async getAll(params?: {
    [key: string]: string | undefined;
  }): Promise<PaginatedResponse<Movie[]>> {
    let query = '';
    if (params) {
      query = Object.keys(params)
        .map((key) => params[key] && `${key}=${params[key]}`)
        .filter((p) => p && p.length)
        .join('&');
    }
    const response = await fetch(`http://localhost:4000/movies?${query}`, {
      method: 'GET',
    });
    const responseData: PaginatedResponse<MoviesResponse[]> =
      await response.json();

    return {
      ...responseData,
      data: responseData.data.map((movie) => this.mapResponse(movie)),
    };
  }

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
