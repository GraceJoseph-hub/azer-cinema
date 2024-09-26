import React from 'react'
import CardSlider from '../slider/CardSlider'
import Header from '../header/Header';

const Hero = ({className}) => {
  return (
    <div className="relative">
      <div className="flex justify-center items-center h-[50px] w-full absolute left-0 top-14 z-50">
        <Header />
      </div>
      <CardSlider />
    </div>
  );
}

export default Hero