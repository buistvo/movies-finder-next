import Link from 'next/link';
import './GenreSelect.css';

export type DropdownOption = { value: string; label: string };

interface InitialProps {
  genreList: DropdownOption[];
  initialSelectedGenre?: string;
}

export function GenreSelect({ genreList, initialSelectedGenre }: InitialProps) {
  // const [selectedGenre, setSelectedGenre] = useState(
  //   initialSelectedGenre || genreList[0].value
  // );

  function handleGenreButtonClick(genre: string) {
    //setSelectedGenre(genre);
    // onSelect(genre);
  }

  return (
    <div className="genre-list">
      {genreList.map((genre) => (
        <Link
          data-testid={genre.value}
          key={genre.value}
          href={`/?genre=${genre?.value}`}
          className={
            initialSelectedGenre?.toLowerCase() === genre.value.toLowerCase()
              ? 'selected'
              : ''
          }
          // onClick={() => handleGenreButtonClick(genre.value)}
        >
          {genre.label}
        </Link>
      ))}
    </div>
  );
}
