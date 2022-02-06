import React, { useState } from 'react';
import './button.css';

const Navbutton = () => {
    const [close, setClose] = useState(false);
    

    return(
    <button onClick={()=> setClose(!close)} className={`block sm:hidden nav-button ${close ? 'navclose' : ''}`}></button>
  );
};

export default Navbutton;
