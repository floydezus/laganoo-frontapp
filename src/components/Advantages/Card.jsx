import React from 'react';

function Card({ title, text }) {
  return (
    <article className='bg-accent px-8 pt-7 pb-9 shadow-card text-center flex flex-col justify-around w-350px'>
      <h1 className='font-bold text-xl mb-9'>{title}</h1>
      <p>{text}</p>
    </article>
  );
}

export default Card;
