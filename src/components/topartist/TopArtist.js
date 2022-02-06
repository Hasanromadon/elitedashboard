import React from 'react';
import Cardartist from '../Cardartist';
import Cardcreator from '../cardcreator/Cardcreator';
import Sectionwrapper from '../sectionwrapper/Sectionwrapper';

const TopArtist = () => {

    const data = [
        {
        id: 1,
        name: 'Cameron William',
        balance: '0.00345ETH',
        percentage: '+10,05%',
        performance: 'up'
        },
        {
        id: 2,
        name: 'Devon Lane',
        balance: '0.00345ETH',
        percentage: '-19,05%',
        performance: 'down'
        },
        {
        id: 3,
        name: 'Jenny Wilson',
        balance: '0.00345ETH',
        percentage: '-19,05%',
        performance: 'up'
        },
    ]

  return(
    <Sectionwrapper more className='bg-shade sm:p-8 p-4 my-8' title='Top Artist'>
        <div className='flex gap-y-4 flex-col'>
        {data.map((creator)=>(
              <Cardartist creator={creator} key={creator.id}/>
        ))}
        </div>
    </Sectionwrapper>

  );
};

export default TopArtist;
