export class Movie {
  id: number = 0;
  imageUrl: string = '';
  name: string = '';
  releaseDate: Date = new Date();
  genreList: string[] = [];
  rating: number | null = null;
  duration: number = 0;
  description: string = '';
}
