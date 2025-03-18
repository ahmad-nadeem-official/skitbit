import React from 'react';
import './hero.css'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src="resources/banner.png" alt="skitbit-imges"/>
        <div className="arrows">
          <div className="lla">
          <div className="la" style={{color:'white'}}>&lt;</div>
          </div>
          <div className="rra">
          <div className="ra" style={{color:'white'}}>&gt;</div>
          </div>
        </div>
      </div>
    </>
  );
}

// width: 35px;
// height: 35px;
export default Hero;


