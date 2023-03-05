import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

export function Promotion() {
  return (
    <div className='pt-5 pb-20 px-5 md:px-20 flex flex-col items-center'>
      <Logo className='w-48 h-auto' />
      <p className='mt-10 mb-6 uppercase text-3xl font-semibold text-center'>
        New year, new savings
      </p>
      <h1 className='uppercase text-4xl text-center text-accent md:text-6xl font-extrabold  max-w-xs md:max-w-full'>
        <span className='text-center inline bg-black p-0 leading-tight'>
          50% off on monthly subscription for 2 years
        </span>
      </h1>
      <p className='hidden md:block mt-1 text-lg'>
        Offer valid from February 1, 2023 to February 1, 2025
      </p>
      <div className='mt-7 text-center uppercase'>
        <span className='max-w-xs md:max-w-sm inline-block text-accent text-4xl font-bold'>
          Don&apos;t miss out!
        </span>
        <div className='text-2xl'>Enjoy long-term savings with our incredible deal</div>
      </div>
      <button
        type='button'
        className='hover:bg-secondary hover:text-primary mt-6 md:hidden uppercase bg-primary text-accent text-xl font-bold py-1 px-5 shadow-stdblack'>
        Sign up now
      </button>
    </div>
  );
}
