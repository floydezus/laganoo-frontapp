import React from 'react';
import { Container } from '../Container';
import { PrimaryButton } from '../PrimaryButton';
import paleBat from '../../assets/img/bat.png';

export function Form() {
  return (
    <section className='flex flex-col items-center pt-16 lg:shadow-lg'>
      <Container>
        <h2 className='text-center mx-10 lg:px-44'>
          Whether you want to create an online store yourself, want a website created by our team,
          or implement the online payment solution, contact us and get a discount code for the
          package tailored to your business.
        </h2>
        <form className='flex flex-col mt-12 mb-36 mx-10 lg:mx-0 lg:px-24 xl:px-36 relative'>
          <div className='flex  gap-7 flex-col lg:flex-row justify-between lg:gap-0'>
            <label htmlFor='name' className='flex flex-col'>
              <span className='font-semibold'>Full Name*</span>
              <input
                id='name'
                className='w-full shadow-lg rounded mt-2 pt-4 pb-3 px-6 lg:w-96 text-sm border-secondary'
                placeholder='Enter Full Name'
              />
            </label>
            <label htmlFor='email' className='flex flex-col'>
              <span className='font-semibold'>Email*</span>
              <input
                id='email'
                className='shadow-lg rounded mt-2 pt-4 pb-3 px-6 lg:w-96 text-sm border-secondary'
                placeholder='Enter email'
              />
            </label>
          </div>
          <label htmlFor='plan' className='flex flex-col mt-8'>
            <span className='font-semibold'>Choose offer*</span>
            <select
              id='plan'
              defaultValue='upgrade'
              className='w-full select-container shadow-lg rounded mt-2 pt-4 pb-3 px-6 lg:w-96 text-sm'>
              <option value='upgrade'>Free upgrade to upper plan</option>
            </select>
          </label>
          <div className='p-4 rounded-lg lg:w-96 lg:p-6 relative mt-7 border-secondary bg-pale'>
            <p className='hover:text-accent cursor-pointer'>50% discount on website creation</p>
            <div className='relative mt-3 mb-6'>
              <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                <div className='w-full border-t border-primary' />
              </div>
            </div>
            <p className='hover:text-accent cursor-pointer'>
              Online payment without processing fees
            </p>
          </div>
          <label htmlFor='message' className='mt-8'>
            <span className='font-semibold'>Message</span>
            <textarea
              id='message'
              placeholder='Tape your message'
              className='w-full shadow-lg rounded mt-2 pt-4 pb-3 px-6 text-sm border-secondary min-h-189'
            />
          </label>
          <div className='flex lg:justify-end mt-14 lg:mt-4'>
            <PrimaryButton text='Submit' bold={false} />
          </div>
          <img
            src={paleBat}
            alt=''
            className='absolute right-0 -bottom-24 lg:-bottom-12 lg:left-10'
          />
        </form>
      </Container>
    </section>
  );
}
