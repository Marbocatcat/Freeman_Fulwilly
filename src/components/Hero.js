import React from 'react';

import { Header } from './common/Header';

const Hero = () => {
  return (
    <Header>
      <p style={style.headerStyle}>
        <a style={style.nameStyle} href="">Freeman Fermon Fulwiley Jr</a> was born in Chicago, Illinois in 1993. Freeman works predominantly with recycled mediums, however he has worked with drawings, paintings, and installations. Freeman has completed a Bachelors of Art in 2016 from Illinois College. He had a senior art show entitled "Kindred Experience" during his final year of his college career. His influences include Jean Michel Basquiat, Trenton Doyle Hancock, Henri Matisse and naive painters. He believes art personally can be summarized by the word bonds. He currently works the non profit AARCP that uses art as holistic approach to help those in need with their problems. He believes that art is a valuable tool to help the younger generation  to increase their consciousness to make choices that benefit their lives as well as the people around the world.
      </p>
    </Header>
  );
}

const style = {
  nameStyle: {
    fontSize: '2.4em',
    color: '#ff6947',
    fontFamily: 'Avenir Next'
  },
  headerStyle: {
    lineHeight: '1.6em',
    textAlign: 'left',
    letterSpacing: '.1em',
    fontSize: '1.4em',
  }
};

export default Hero;
