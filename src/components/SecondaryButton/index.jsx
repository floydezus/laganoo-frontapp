import React from 'react';

export function SecondaryButton({ text, customStyles }) {
  return (
    <button
      className={`hover:bg-secondary active:scale-105 bg-accent rounded-md uppercase shadow-std py-2 px-12 min-w-[160px] font-bold ${customStyles}`}
      type='submit'>
      {text}
    </button>
  );
}
