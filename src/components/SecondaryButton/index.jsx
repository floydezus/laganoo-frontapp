import React from 'react';

export function SecondaryButton({ text }) {
  return (
    <button
      className='hover:bg-secondary active:scale-105 bg-accent rounded-md uppercase shadow-std py-1 px-8 font-bold'
      type='submit'>
      {text}
    </button>
  );
}
