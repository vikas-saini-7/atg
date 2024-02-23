import React, { useState } from 'react'

const Hero = () => {
  const [joinBtn, setJoinBtn] = useState(true);
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
      <div className='pt-4 md:pt-72 pb-14 custom-container-2 text-white relative z-1'>
        <div className='flex md:hidden items-center justify-between mb-24'>
          <p><i class="fa-solid fa-arrow-left"></i></p>
          {joinBtn ?
            <button onClick={() => setJoinBtn(false)} className=' border border-gray-400 px-4 py-2 rounded-lg '><i class="fa-solid fa-user-plus mr-2"></i>Join Group</button>
            :
            <button onClick={() => setJoinBtn(true)} className=' border border-gray-400 px-4 py-2 rounded-lg '><i class="fa-solid fa-arrow-right-from-bracket mr-2"></i>Leave Group</button>
            }
        </div>
        <h1 className='font-bold text-4xl mb-2'>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
    </>
  )
}

export default Hero