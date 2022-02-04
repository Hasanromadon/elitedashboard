import React from 'react';
import DropDown from '../dropdown/Dropdown';
import Search from '../search/Search';

const Header = () => {
  return(
    <header  className='flex justify-between items-center '>
    <Search placeholder='Search Collection' />
    <div className='flex justify-end items-center gap-4' >
      <div className='bg-shade py-4 px-5 rounded-lg'>
        <img width={22} src='./icons/bell.svg' alt='' />
      </div>
      <img width={44} alt='' src='./icons/profile.png'/>
      <DropDown/>
    </div>
  </header>
  );
};

export default Header;
