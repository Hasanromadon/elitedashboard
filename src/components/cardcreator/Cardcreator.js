import React from 'react';

const Cardcreator = ({creator}) => {
  return(
    <div className='grid grid-cols-[2.2fr_1fr] gap-1 items-center'>
        <div className='flex gap-3 items-center'>
        <p className='font-semibold'>{creator.id}</p>
            <img src={`./card/creator/${creator.id}.png`} alt='' />
            <div>
                <p className='font-semibold'>{creator.name}</p>
                <p className='text-gray-400 text-sm '>{creator.balance}</p>
            </div>
        </div>
        <div className='flex justify-end gap-3'>
            <img src={`icons/${creator.performance === 'up' ? 'upgreen.svg' : 'down-red.svg' }`} alt=''/>
            <p className='text-sm'>{creator.percentage}</p>
        </div>
    </div>

  );
};

export default Cardcreator;
