import React from 'react';

export const MovieDetailsContainer = ({ children }) => (
  <div className="flex">{children}</div>
);

export const InfoContainer = ({ children }) => (
  <div className="flex flex-col p-8 items-start w-full min-w-500">
    {children}
  </div>
);

export const InfoHeader = ({ children }) => (
  <h2 className="font-light">{children}</h2>
);

export const Rating = ({ children }) => (
  <span className="font-light text-xs py-2 px-4 ml-4 border border-gray-500 rounded-full inline-block w-12">
    {children}
  </span>
);

export const Genre = ({ children }) => (
  <span className="text-gray-500 text-sm font-medium">{children}</span>
);

export const AdditionalInfo = ({ children }) => (
  <div className="flex justify-between w-1/3 text-red-500 text-lg font-light">
    {children}
  </div>
);

export const Description = ({ children }) => (
  <span className="text-gray-500 text-start mt-4">{children}</span>
);
