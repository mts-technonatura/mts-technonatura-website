import React from 'react';

function PageTitle({ children }) {
  return (
    <h1 className='mt-6 text-5xl font-bold text-gray-700 dark:text-gray-200'>
      {children}
    </h1>
  );
}

export default PageTitle;
