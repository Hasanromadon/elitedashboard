import React from 'react';
import './button.css';

const Button = ({children, primary}) => {  
  
    return(
      <button className={`${primary ? 'btn-primary' : 'btn-outlined '}`}>
        {children}
      </button>
  );
};

export default Button;
