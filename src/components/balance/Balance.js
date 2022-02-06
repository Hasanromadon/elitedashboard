import React from 'react';
import Sectionwrapper from '../sectionwrapper/Sectionwrapper';

const Balance = () => {
  return(
    <Sectionwrapper  className='p-8 pb-12 bg-shade' title='Total Balance'>
        <div className='relative'>
            <img className='object-cover' src='./icons/card.png' alt=''/>
           <div className='absolute top-2 sm:top-6 left-2 sm:left-6'>
                <div className='mb-6'>
                <p className='text-base font-normal'>Your Balance</p>
               <p className='text-[22px] font-semibold'>2.989000 ETH</p>
                </div>
                <div>
                <p className='text-base font-normal'>Total Offers</p>
                <p className='text-[22px] font-semibold'>0.38983 ETH</p>
                </div>
           </div>
        </div>
    </Sectionwrapper>
  );
};

export default Balance;
