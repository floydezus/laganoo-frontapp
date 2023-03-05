import React from 'react';
import { Footer } from '../components';
import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main className='pt-16 lg:pt-20'>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
