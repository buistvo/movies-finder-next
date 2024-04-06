'use client';
import { Movie } from '../../types/movie';
import { useState } from 'react';
import Link from 'next/link';
interface MovieTileProps {
  movie: Movie;
}

const StyledEllipsis = () => (
  <span className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-2xl w-5">
    &#x2026;
  </span>
);

export function MovieTile({ movie }: MovieTileProps) {
  const [isContextMenuOpenState, setIsContextMenuOpenState] = useState(false);
  // const location = useLocation();
  //const searchParams = new URLSearchParams(location.search);
  // const linkUrl = `/${movie.id}?${searchParams.toString()}`;

  function handleContextMenuClick() {
    setIsContextMenuOpenState(!isContextMenuOpenState);
  }

  // function handleEditClick() {
  //   if (onEdit) onEdit(movie);
  // }

  // function handleDeleteClick() {
  //   if (onDelete) onDelete(movie);
  // }

  return (
    <div className="block relative text-secondary-text mx-6 w-auto">
      <div className="absolute right-0">
        {isContextMenuOpenState ? (
          <div className="grid h-32 w-64 bg-workspace m-2">
            <button onClick={handleContextMenuClick}>{'\u2715'}</button>
            <div>
              <button
                className="w-full bg-workspace text-secondary-text"
                //  onClick={handleEditClick}
              >
                Edit
              </button>
              <button
                className="w-full bg-workspace text-secondary-text"
                // onClick={handleDeleteClick}
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <button
            className="p-0 bg-workspace text-white absolute top-0 right-0 w-2 h-2"
            data-testid="ellipsis-button"
            onClick={handleContextMenuClick}
          >
            <StyledEllipsis></StyledEllipsis>
          </button>
        )}
      </div>
      <Link href={movie.id.toString()}>
        <img
          className="min-w-64 h-96 w-64"
          alt={movie.name}
          src={movie.imageUrl}
        />
      </Link>

      <div className="flex">
        <span className="w-4/5 font-semibold"> {movie.name} </span>
        <span className="w-1/5 text-center border border-background rounded-5 ">
          {movie.releaseDate.getFullYear()}
        </span>
      </div>
      <div className="text-start text-sm font-light">
        {' '}
        {movie.genreList.join(', ')}{' '}
      </div>
    </div>
  );
}
