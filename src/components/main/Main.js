import React from 'react';
import Balance from '../balance/Balance';
import Creator from '../creator/Creator';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import TopArtist from '../topartist/TopArtist';
import Topcollection from '../Topcollection/Topcollection';
import './Main.css';

const Main = ({handleSidebar, close}) => {
  return (

    <main className={`w-full px-3 sm:px-8 z-0 ${close ? 'opacity-5' : ''}`}>
      <Header handleSidebar={handleSidebar} close={close} />

      <div className='grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] py-8 gap-x-8 gap-y-8 sm:gap-y-0 '>
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
