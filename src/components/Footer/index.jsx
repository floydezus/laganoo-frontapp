import React from 'react';
import { Link } from 'react-router-dom';
import { SecondaryButton } from '../SecondaryButton';
import { ReactComponent as AppStore } from '../../assets/img/appstore.svg';
import { ReactComponent as GooglePlay } from '../../assets/img/google_play.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube.svg';

const currentYear = new Date().getFullYear().toString();

const sellOnline = {
  category: 'Sell Online',
  items: [
    { id: 1, value: 'Sell on Amazon' },
    { id: 2, value: 'Sell on eBay' },
    { id: 3, value: 'Sell on Google' },
    { id: 4, value: 'Sell on Facebook' },
    { id: 5, value: 'Sell on Instagram' },
    { id: 6, value: 'Sell on TikTok' },
  ],
};

const price = {
  category: 'Price',
  items: [
    { id: 1, value: 'Monthly Plans' },
    { id: 2, value: 'Annual Plans' },
    { id: 3, value: 'How to chose plan' },
  ],
};

const laganoo = {
  category: 'Laganoo',
  items: [
    { id: 1, value: 'About Us' },
    { id: 2, value: 'Press' },
    { id: 3, value: 'Press Kit' },
    { id: 4, value: 'Support' },
    { id: 5, value: 'Sitemap' },
    { id: 6, value: 'Copyright Policy‎' },
    { id: 7, value: 'Terms of Service' },
  ],
};

const weBuild = {
  category: 'We Build for You',
  items: [
    { id: 1, value: 'Ecommerce website' },
    { id: 2, value: 'Business websites' },
  ],
};

const other = {
  category: 'Other Services',
  items: [
    { id: 1, value: 'Buy a Domain' },
    { id: 2, value: 'Branding' },
    { id: 3, value: 'Social Media Managment' },
    { id: 4, value: 'Email Marketing' },
    { id: 5, value: 'PPC' },
    { id: 6, value: 'SEO' },
    { id: 7, value: 'Payment Solutions' },
    { id: 8, value: 'Image Library' },
  ],
};

const store = {
  category: 'Manage store',
  items: [
    { id: 1, value: 'Mobile' },
    { id: 2, value: 'APP Market' },
    { id: 3, value: 'Connect WP website' },
  ],
};

const learn = {
  category: 'Learn',
  items: [
    { id: 1, value: 'Community' },
    { id: 2, value: 'FAQ' },
    { id: 3, value: 'Tutorials' },
    { id: 4, value: 'How to' },
  ],
};

const partners = {
  category: 'Partners',
  items: [
    { id: 1, value: 'Partnerships' },
    { id: 2, value: 'Reseller Program' },
    { id: 3, value: 'Investors' },
  ],
};

const diy = {
  category: 'DIY',
  items: [
    { id: 1, value: 'Email marketing' },
    { id: 2, value: 'Email hosting' },
    { id: 3, value: 'SEO' },
  ],
};

const socials = [
  {
    id: 1,
    value: 'facebook',
    icon: <Facebook className='icon' />,
    href: 'https://www.facebook.com/LaganooEcommerce',
  },
  {
    id: 2,
    value: 'instagram',
    icon: <Instagram className='icon' />,
    href: 'https://www.instagram.com/laganoo.ecommerce/',
  },
  {
    id: 3,
    value: 'linkedin',
    icon: <LinkedIn className='icon' />,
    href: 'https://www.linkedin.com/company/laganoo/mycompany/',
  },
  {
    id: 4,
    value: 'youtube',
    icon: <Youtube className='icon' />,
    href: 'https://www.youtube.com/channel/UCBFuzzpcPZPfQqPEgIIkFUg',
  },
  {
    id: 5,
    value: 'twitter',
    icon: <Twitter className='icon' />,
    href: 'https://twitter.com/LaganooEcomm',
  },
];

export function Footer() {
  return (
    <footer id='footer' className='pb-6 pt-16 md:pb-10 mx-7'>
      {/* <Container> */}
      <nav className='grid grid-cols-2 gap-y-5 md:grid-rows-2 md:grid-cols-5 justify-between'>
        <div>
          <h3 className='font-semibold mb-1'>{sellOnline.category}</h3>
          <ul className='text-sm'>
            {sellOnline.items.map((it) => (
              <li key={it.id} className='max-w-xxxs hover:cursor-pointer hover:underline'>
                {it.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-1'>{price.category}</h3>
          <ul className='text-sm'>
            {price.items.map((it) => (
              <li key={it.id} className='max-w-xxxs hover:cursor-pointer hover:underline'>
                {it.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-1'>{laganoo.category}</h3>
          <ul className='text-sm'>
            {laganoo.items.map((it) => (
              <li key={it.id} className='max-w-xxxs hover:cursor-pointer hover:underline'>
                {it.value}
              </li>
            ))}
          </ul>
        </div>
        <div className='md:justify-self-center'>
          <h3 className='font-semibold mb-1'>{weBuild.category}</h3>
          <ul className='text-sm'>
            {weBuild.items.map((it) => (
              <li key={it.id} className='max-w-xxxs hover:cursor-pointer hover:underline'>
                {it.value}
              </li>
            ))}
          </ul>
        </div>
        <div className='md:justify-self-end'>
          <h3 className='font-semibold mb-1'>{other.category}</h3>
          <ul className='text-sm'>
            {other.items.map((it) => (
              <li key={it.id} className='max-w-xxxs hover:cursor-pointer hover:underline'>
                {it.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-1'>{store.category}</h3>
          <ul className='text-sm'>
            {store.items.map((it) => (
              <li key={it.id} className='max-w-xxxs hover:cursor-pointer hover:underline'>
                {it.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-1'>{learn.category}</h3>
          <ul className='text-sm'>
            {learn.items.map((it) => (
              <li key={it.id} className='max-w-xxxs hover:cursor-pointer hover:underline'>
                {it.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-1'>{partners.category}</h3>
          <ul className='text-sm'>
            {partners.items.map((it) => (
              <li key={it.id} className='max-w-xxxs hover:cursor-pointer hover:underline'>
                {it.value}
              </li>
            ))}
          </ul>
        </div>
        <div className='md:justify-self-center'>
          <h3 className='font-semibold mb-1'>{diy.category}</h3>
          <ul className='text-sm'>
            {diy.items.map((it) => (
              <li key={it.id} className='max-w-xxxs hover:cursor-pointer hover:underline'>
                {it.value}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* For Desktop */}
      <div className='hidden md:flex justify-between mb-5'>
        <div className='flex flex-col gap-4'>
          <SecondaryButton text='Login' />
          <GooglePlay className='cursor-pointer' />
          <AppStore className='cursor-pointer' />
        </div>
        <ul className='flex gap-18px self-end'>
          {socials.map((it) => (
            <li key={it.id} className='h-8 w-8'>
              <Link to={it.href}>{it.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* For Mobile */}
      <div className='flex justify-between mb-5 mt-28 md:hidden'>
        <div className='flex flex-col gap-4'>
          <AppStore className='cursor-pointer' />
          <GooglePlay className='cursor-pointer' />
          <ul className='flex gap-14px'>
            {socials.map((it) => (
              <li key={it.id} className='h-6 w-6 md:h-8 md:w-8'>
                <Link to={it.href}>{it.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='self-end'>
          <SecondaryButton text='Login' />
        </div>
      </div>
      {/* Divider */}
      <div className='relative mb-8'>
        <div className='absolute inset-0 flex items-center' aria-hidden='true'>
          <div className='w-full border-t border-primary' />
        </div>
      </div>
      <div className='md:flex md:justify-between'>
        <span className='hidden md:block'>
          <select defaultValue='english' className='select-container cursor-pointer'>
            <option value='english'>English</option>
            <option value='serbian'>Serbian</option>
          </select>
        </span>
        <div className='text-center mt-7'>
          Copyright © {currentYear} Laganoo. All Rights Reserved.
        </div>
      </div>
      {/* </Container> */}
    </footer>
  );
}
