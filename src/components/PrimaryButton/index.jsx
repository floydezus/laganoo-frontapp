import React from 'react';

export function PrimaryButton({ text, bold = true, borderRadius = 'md', hasShadow = true }) {
  return (
    <button
      className={`
      px-18
      hover:bg-accent 'md:text-lg' text-white active:scale-105 bg-primary ${
        borderRadius === 'sm' ? 'rounded-sm' : 'rounded-md'
      } ${hasShadow && 'shadow-std'} pt-2 pb-3 ${bold ? 'font-bold' : 'font-semibold'}`}
      type='submit'>
      {text}
    </button>
  );
}
