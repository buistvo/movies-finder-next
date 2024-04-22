'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Input } from 'postcss';
import { FormEvent } from 'react';

export function SearchForm({ query }: { query: string }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    const params = new URLSearchParams(searchParams);
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const query = form.get('query');
    if (query) {
      params.set('query', query as string);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-4/5 inline-block">
      <h2 className="font-thin text-left text-2xl">FIND YOUR MOVIE</h2>
      <form onSubmit={handleSearch} className="flex justify-center">
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
