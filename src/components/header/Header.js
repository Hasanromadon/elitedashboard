import React from 'react';
import DropDown from '../dropdown/Dropdown';
import Search from '../search/Search';
import './Header.css';


const Header = ({handleSidebar, close}) => {

  return(
    <header  className='flex justify-between items-center '>
    <Search placeholder='Search Collection' />
    <div className='flex justify-end items-center gap-4' >
        <img className='bg-shade p-4 rounded-xl'  src='./icons/bell.svg' alt='' />
      <img className='hidden sm:block' width={44} alt='' src='./icons/profile.png'/>
      <button onClick={()=>handleSidebar()} className={`block sm:hidden nav-button ${close ? 'navclose' : ''}`}></button>
      <DropDown/>
    </div>
  </header>
  );
};

export default Header;
