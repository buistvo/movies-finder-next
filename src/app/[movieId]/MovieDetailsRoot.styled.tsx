import React from 'react';

export const DetailsContainer = ({ children }) => (
  <div className="bg-gray-900 relative min-h-400 p-4 mb-4">{children}</div>
);

export const SearchSwitcherButton = ({ children }) => (
  <button className="bg-gray-900 text-red-500 hover:bg-gray-900">
    {children}
  </button>
);

export const MoviesContainer = ({ children }) => (
  <div className="bg-gray-900 p-8">{children}</div>
);

export const DetailsHeader = ({ children }) => (
  <div className="flex justify-between relative">
    {children}
    <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-500"></div>
  </div>
);

export const MovieListPageContainer = ({ children }) => <div>{children}</div>;

export const MoviesTotal = ({ children }) => (
  <div className="pt-8 pl-8 text-left">{children}</div>
);

export const MovieListPageFooter = ({ children }) => (
  <div className="pt-4 pb-4 bg-gray-900 bg-opacity-80">{children}</div>
);

export const TopContainer = ({ children }) => (
  <div className="grid min-h-460">{children}</div>
);

export const TopContainerHeader = ({ children }) => (
  <div className="flex justify-between relative z-10 pt-4 pr-8 pl-8">
    {children}
  </div>
);
