import React from 'react';
import './css/Header.css';

const Header = ({ children, backgroundColor }) => {
  return (
    <section>
      <div className="container" style={backgroundColor={backgroundColor}}>
        { children }
      </div>
    </section>
  )
}



export { Header };
