import React from 'react';
import './css/Navigation.css';

const Navigation = ({ children, backgroundColor, color, position }) => {
  return (
    <nav style={{ backgroundColor, justifyContent: position }}>
      <ul style={{color}}>
        {children}
      </ul>
    </nav>
  );
}

export { Navigation }
