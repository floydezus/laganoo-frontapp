import React from 'react';
import titleDesktop from '../../assets/img/title-desktop.png';
import titleMobile from '../../assets/img/title-mobile.png';
import { Container } from '../Container';

export function Hero({ handlerOpenModal }) {
  return (
    <section className='md:bg-hero'>
      {/* Desktop */}
      <div className='hidden md:block'>
        <Container>
          <div className='flex flex-col items-center pt-12'>
            <img alt='Scare off your competition this Halloween!' src={titleDesktop} />
            <div className='text-center pt-3'>
              <p className='text-white font-bold text-21px leading-5 max-w-3xl'>
                Alarmingly quick ecommerce solution for your business! Simple website creation, easy
                online store management from one place. Secure online payment solution without
                processing fees.
              </p>
              <button
                className='hover:bg-secondary active:scale-105 bg-accent rounded-md uppercase py-2 px-7 font-bold mt-9'
                type='button'
                onClick={() => handlerOpenModal(true)}>
                Scare off your competition now
              </button>
            </div>
          </div>
        </Container>
      </div>
      {/* Mobile */}

      <div className='md:hidden'>
        <div className=' bg-hero h-big'>
          <img
            alt='Scare off your competition this Halloween!'
            src={titleMobile}
            className='mx-auto pt-8'
          />
        </div>
        <Container>
          <div className='pt-10 pb-8 text-center'>
            <p className='text-primary font-bold text-21px leading-5 max-w-3xl'>
              Alarmingly quick ecommerce solution for your business! Simple website creation, easy
              online store management from one place. Secure online payment solution without
              processing fees.
            </p>
            <button
              className='hover:bg-secondary active:scale-105 bg-accent rounded-md uppercase py-2 px-7 font-bold mt-9'
              type='button'
              onClick={() => handlerOpenModal(true)}>
              Scare off your competition now
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
