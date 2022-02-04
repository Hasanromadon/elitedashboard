import React from 'react';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import './Main.css';

const Main = () => {
  return (
    <main className='w-full px-8'>
      <Header/>
      <div className='grid grid-cols-[1.3fr_1fr] py-8'>
        <Hero/>
      </div>
    </main>
  );
};

export default Main;
