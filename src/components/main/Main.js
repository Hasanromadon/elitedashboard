import React from 'react';
import Balance from '../balance/Balance';
import Creator from '../creator/Creator';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import TopArtist from '../topartist/TopArtist';
import Topcollection from '../Topcollection/Topcollection';
import './Main.css';

const Main = () => {
  return (
    <main className='w-full px-8'>
      <Header/>
      <div className='grid grid-cols-[1.5fr_1fr] py-8 gap-x-8 '>
        <Hero/>
        <Balance/>
        <Topcollection/>
        <div>
          <Creator />
          <TopArtist/>
        </div>
      </div>
    </main>
  );
};

export default Main;
