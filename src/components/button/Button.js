import React from 'react';
import './button.css';

const Button = ({children, primary, small , onClick}) => {  
  
    return(
      <button onClick={onClick} className={`${primary ? 'btn-primary' : 'btn-outlined '} ${small ? 'text-[10px] sm:min-w-[76px] ' : 'text-sm '}`}>
        {children}
      </button>
  );
};

export default Button;
