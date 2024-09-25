import React from 'react'
import CardSlider from '../slider/CardSlider'

const Hero = ({className}) => {
  return (
    <div className="relative">
      <div className="flex justify-center items-center h-[50px] w-full absolute left-0 top-0 z-50">navbar</div>
      <CardSlider />
    </div>
  );
}

export default Hero