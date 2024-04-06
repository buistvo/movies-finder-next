import { FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { redirect } from 'next/navigation';

export function SearchForm({ query }: { query: string }) {
  return (
    <div className="w-4/5 inline-block">
      <h2 className="font-thin text-left text-2xl">FIND YOUR MOVIE</h2>
      <form className="flex justify-center">
        <input
          data-testid="search-input"
          type="text"
          className="w-full border-none bg-opacity-50 bg-gray-800 px-4"
          defaultValue={query}
          placeholder="What do you want to watch?"
          name="query"
        />
        <button
          className="bg-primary-red text-white font-normal hover:bg-hover-red ml-2"
          data-testid="search-button"
          type="submit"
        >
          SEARCH
        </button>
      </form>
    </div>
  );
}
