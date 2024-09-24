import React from 'react'
import CardSlider from '../slider/CardSlider'

const Hero = ({className}) => {
  return (
    <div className={`${className}`}>
      <CardSlider />
    </div>
  )
}

export default Hero