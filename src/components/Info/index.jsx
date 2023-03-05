import React from 'react';
import { Container } from '../Container';

export function Info() {
  return (
    <section className='md:bg-info flex flex-col'>
      {/* Desktop */}
      <div className='hidden md:block'>
        <Container>
          <div className='flex h-big mx-8'>
            <div className='bg-white opacity-80 my-auto py-5  lg:px-18 xl:px-16 mx-auto text-center'>
              <p>
                Holidays such as Halloween are a time when customers take extra interest in their
                favorite products, because businesses promote their brand by offering special
                discounts during that period. Most of your clients are on the Internet and are
                expecting a discount deal, so that they canorder their favorite product for a
                special price.
              </p>
              <br />
              <p>
                That&apos;s why many businesses today look for an ideal ecommerce solution that will
                allow them quick access and simple management of online sales. Is your brand
                presented on the internet? Laganoo offers alarmingly good packages for your
                business.
              </p>
            </div>
          </div>
        </Container>
      </div>
      {/* Mobile */}
      <div className='md:hidden'>
        <div className=' bg-info h-48' />
        <Container>
          <div className='py-10 text-center'>
            <p>
              Holidays such as Halloween are a time when customers take extra interest in their
              favorite products, because businesses promote their brand by offering special
              discounts during that period. Most of your clients are on the Internet and are
              expecting a discount deal, so that they canorder their favorite product for a special
              price.
            </p>
            <br />
            <p>
              That&apos;s why many businesses today look for an ideal ecommerce solution that will
              allow them quick access and simple management of online sales. Is your brand presented
              on the internet? Laganoo offers alarmingly good packages for your business.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
