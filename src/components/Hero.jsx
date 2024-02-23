import React from 'react'

const Hero = () => {
  return (
    <div 
      style={{backgroundImage: 'url(./images/hero.jpg)'}}
      
    >
      {/* Hero */}
      <div className='pt-72 pb-14 custom-container-2 text-white'>
        <h1 className='font-bold text-4xl mb-2'>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  )
}

export default Hero