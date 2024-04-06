'use client';
import { FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function SearchForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const params = new URLSearchParams(searchParams.toString());
    const query =
      new FormData(event.currentTarget).get('query')?.toString() || '';
    params.set('query', query);
    router.push(params.toString());
  }

  return (
    <div className="w-4/5 inline-block">
      <h2 className="font-thin text-left text-2xl">FIND YOUR MOVIE</h2>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          data-testid="search-input"
          type="text"
          className="w-full border-none bg-opacity-50 bg-gray-800 px-4"
          defaultValue={searchParams.get('query') || ''}
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
