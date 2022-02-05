import React from 'react';

const Sectionwrapper = ({children, title, className, more}) => {
  return(
    <div className={` rounded-3xl ${className}`} >
      <div className='flex items-center justify-between mb-4'>
      <p className='text-2xl'>{title}</p>
        {more ?<button className='hover:text-purple-500'>See All</button> : ''}
      </div>

        {children}
    </div>
  );
};

export default Sectionwrapper;
