import React from 'react'

const RECOMMANDED_GROUPS_DATA = [
  {
    name: 'Leisure',
    image: 'https://images.unsplash.com/photo-1495837174058-628aafc7d610?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2Vib29rJTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D'
  },
  {
    name: 'Activism',
    image: 'https://i.pinimg.com/474x/da/cc/2a/dacc2a44063da72422877b28ccd7e350.jpg'
  },
  {
    name: 'MBA',
    image: 'https://e0.pxfuel.com/wallpapers/193/176/desktop-wallpaper-smiley-for-whatsapp-group.jpg'
  },
  {
    name: 'Philosophy',
    image: 'https://photosfile.com/wp-content/uploads/2022/12/Whatsapp-Group-DP-1.jpg'
  },
]

const Sidebar = ({isAuthenticated}) => {
  return (
    <div className='p-[5%]'>
        {
          isAuthenticated ?
          <>
            <div className='flex justify-between items-center border-b pb-2'>
              <div className='flex items-center gap-1'>
                <i class="fa-solid fa-location-dot"></i>
                <input className='w-full px-2 py-2 outline-none' type="text" placeholder='Enter your location' />
              </div>
              <i class="fa-solid fa-pen"></i>
            </div>
            <div className='mt-8'>
                <p className='text-sm text-gray-400'>Your location will help us serve better and extend a personalised experience.</p>
            </div>
            <div className='mt-12'>
              <h1 className='uppercase mb-8'>REcommended Groups</h1>
              {RECOMMANDED_GROUPS_DATA.map((group) => (
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center gap-2'>
                    <img className='w-10 h-10 rounded-full object-cover' src={group.image} alt="" />
                    <p>{group.name}</p>
                  </div>
                  <p className='bg-gray-200 px-4 py-1 rounded-full text-sm cursor-pointer'>Follow</p>
                </div>
              ))}
            </div>
            <div className='text-blue-500 text-right text-sm mt-12'>See More...</div>
          </>
          :
          <>
            <div className='flex justify-between items-center border-b pb-2'>
              <div className='flex items-center gap-1'>
                <i class="fa-solid fa-location-dot"></i>
                <input defaultValue="Noida, India" className='w-full px-2 py-2 outline-none' type="text" placeholder='Enter your location' />
              </div>
              <i class="fa-solid fa-pen"></i>
            </div>
            <div className='mt-8'>
                <p className='text-sm text-gray-400'>Your location will help us serve better and extend a personalised experience.</p>
            </div>
          </>
        }
    </div>
  )
}

export default Sidebar