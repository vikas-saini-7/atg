import React from 'react'

const Hero = () => {
  return (
    <>
    <div 
    className="relative" 
    style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
      >
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div className='pt-72 pb-14 custom-container-2 text-white relative z-1'>
        <h1 className='font-bold text-4xl mb-2'>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
    </>
  )
}

export default Hero