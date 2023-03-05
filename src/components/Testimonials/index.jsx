import React from 'react';
import { Container } from '../Container';
import pumpkin from '../../assets/img/small-pumpkin.png';
import bats from '../../assets/img/double-bats.png';

function renderDecoration() {
  return (
    <div className='flex gap-2'>
      {[1, 2, 3, 4, 5].map((it) => (
        <img key={it} width='38' height='32' src={pumpkin} alt='' />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className='bg-accent w-full'>
      <Container>
        <div className='px-2 pt-12 pb-20 grid grid-cols-1 lg:flex gap-5 lg:px-8 lg:py-17'>
          <article className='px-8 pb-8 shadow-testimonials pt-8 lg:h-80  lg:min-w-480 lg:pb-5 flex flex-col bg-white rounded-md items-center justify-between'>
            {renderDecoration()}
            <p className='text-base leading-5 font-bold text-center mt-10 xl:text-xl lg:max-h-32'>
              “When it comes to sales and direct communication with potential buyers that are here
              just to buy a product, an ecommerce website is the right choice.”
            </p>
            <div className='mt-7 leading-5 font-semibold text-lg'>
              <div className='text-center text-accent'>Jovana Djurisic,</div>
              <div className='text-center'>Shtrikarica owner and entrepreneur</div>
            </div>
          </article>
          <article className='px-8 pb-8 relative shadow-testimonials lg:h-80 pt-8  lg:pb-5 flex flex-col bg-white rounded-md items-center justify-between'>
            {renderDecoration()}
            <img src={bats} alt='' className='hidden lg:block absolute -right-8 -top-8' />
            <p className='text-base font-bold leading-5 text-center mt-10 xl:text-xl lg:max-h-32'>
              “<span className='text-accent'>Awsome!</span> It took me literally 15 minutes to
              create my website, one day to put everything in place: the choice of products,
              photos... the platform is very intuitive, I strongly recommend it to anyone who, like
              me, is not skilled in web design, the templates are great :)”
            </p>
            <div className='mt-7 leading-5 font-semibold text-lg'>
              <div className='text-center text-accent'>Ana27,</div>
              <div className='text-center'>Appsumo Verifed Purchaser</div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
