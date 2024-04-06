import { MoviesResponse } from '../types/movies-response';

export interface SortOption {
  field: keyof MoviesResponse;
  label: string;
}

export const SORT_OPTIONS: SortOption[] = [
  {
    field: 'title',
    label: 'TITLE',
  },
  {
    field: 'release_date',
    label: 'RELEASE DATE',
  },
  {
    field: 'vote_average',
    label: 'RATING',
  },
];
