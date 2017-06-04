import React from 'react';
import './css/Button.css';

const Button = ({ children, color, backgroundColor }) => {
  return (
    <button style={{ backgroundColor }} type='button'>
      <span style={{ color }} className='button_Inner'>
        {children}
      </span>
    </button>
  );
};

export { Button };
