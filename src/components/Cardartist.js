import React from 'react';
import Button from './button/Button';

const Cardartist = ({creator}) => {
  return(
    <div className='flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
        <p className='font-semibold'>{creator.id}</p>
            <img src={`./card/creator/${creator.id}.png`} alt='' />
            <div>
                <p className='font-semibold'>{creator.name}</p>
                <p className='text-gray-400 text-sm '>{creator.balance}</p>
            </div>
        </div>
        <div className='flex gap-3'>
            <Button primary small>
                Follow
            </Button>
        </div>
    </div>

  );
};

export default Cardartist;
