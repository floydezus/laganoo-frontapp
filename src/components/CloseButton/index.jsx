import React from 'react';

export function CloseButton({ handlerClose }) {
  return (
    <button
      type='button'
      onClick={handlerClose}
      className='inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent absolute top-2 right-2'>
      <span className='sr-only'>Close</span>

      <svg
        className='h-6 w-6'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        aria-hidden='true'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </button>
  );
}
