import React, { useState } from 'react'
import PostCard from './PostCard'
import Sidebar from './Sidebar'

const DUMMY_DATA = [
  {
    id:1,
    image: 'https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: '✍️ Article',
    title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
    description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
    views: '1.4k',
    user: {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHjMzM5qzBjS64SJEIyCQkLgXODzDLznFPOt54tmyPNXP3BQ78_AN83FAlbeGujmuPCg&usqp=CAU',
      name: 'Sarthak Kamra'
    },
  },
  {
    id:2,
    image: 'https://images.unsplash.com/photo-1707345512638-997d31a10eaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: '🔬️ Education',
    title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
    description: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
    views: '1.4k',
    user: {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrIPUVHe81YZpOiRUNwRq32b7QEpEVP6YeuAImz3FaOtVYPTNNkRveATsieLpH2_kr4g&usqp=CAU',
      name: 'Sarah West'
    },
  },
  {
    id:3,
    image: 'https://images.unsplash.com/photo-1610644386043-f130348930da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: '🗓️ Meetup',
    title: 'Software Developer',
    extra: {
      label: 'Fri, 12 Oct, 2018',
      location: 'Ahmedabad, India'
    },
    button: 'Visit Website',
    views: '1.4k',
    user: {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHjMzM5qzBjS64SJEIyCQkLgXODzDLznFPOt54tmyPNXP3BQ78_AN83FAlbeGujmuPCg&usqp=CAU',
      name: 'Ronal Jones'
    },
  },
  {
    id:4,category: '💼️ Job',
    title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
    extra: {
      label: 'Innovaccer Analytics Private Ltd.',
      location: 'Noida, India'
    },
    button: 'Apply on Timesjobs',
    views: '1.4k',
    user: {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrIPUVHe81YZpOiRUNwRq32b7QEpEVP6YeuAImz3FaOtVYPTNNkRveATsieLpH2_kr4g&usqp=CAU',
      name: 'Joseph Gray'
    },
  },
]

const Main = ({isAuthenticated }) => {

  const [joinBtn, setJoinBtn] = useState(true);
  return (
    <div className='custom-container-2'>
      {/* TOP HOMEPAGE NAVIGATION LARGE SCREEN */}
      <div className='hidden md:flex justify-between items-center border-b sticky top-0 py-4 bg-white z-20'>
          <div className='flex gap-6 -mb-1'>
            <p className='border-b-2 border-gray-500 pb-1'>All Posts (32)</p>
            <p className='text-gray-500 cursor-pointer border-gray-400 hover:text-black transition-all active:text-blue-500'>Article</p>
            <p className='text-gray-500 cursor-pointer border-gray-400 hover:text-black transition-all active:text-blue-500'>Event</p>
            <p className='text-gray-500 cursor-pointer border-gray-400 hover:text-black transition-all active:text-blue-500'>Education</p>
            <p className='text-gray-500 cursor-pointer border-gray-400 hover:text-black transition-all active:text-blue-500'>Job</p>
          </div>
          <div className='flex gap-2'>
            <button className='bg-gray-200 px-4 py-2 rounded-lg'>Write a Post <i class="fa-solid fa-chevron-down text-xs ml-1"></i></button>
            {joinBtn ?
            <button onClick={() => setJoinBtn(false)} className='bg-blue-600 border border-gray-50 px-4 py-2 rounded-lg text-white'><i class="fa-solid fa-user-plus mr-2"></i>Join Group</button>
            :
            <button onClick={() => setJoinBtn(true)} className='bg-white border border-gray-400 px-4 py-2 rounded-lg '><i class="fa-solid fa-arrow-right-from-bracket mr-2"></i>Leave Group</button>
            }
          </div>
      </div>

      {/* TOP HOMEPAGE NAVIGATION SMALL SCREEN */}
      <div className='flex md:hidden justify-between items-center border-b sticky top-0 py-4 bg-white z-20'>
          <div className='flex gap-6 -mb-1'>
            <p className='border-b-2 border-gray-500 pb-1'>All Posts (32)</p>
          </div>
          <div className='flex gap-2'>
            <button className='bg-gray-200 px-4 py-2 rounded-lg'>Filter: All <i class="fa-solid fa-chevron-down text-xs ml-1"></i></button>
          </div>
      </div>

      {/* POSTS + Sidebar GRID  */}
      <div className='flex flex-col md:flex-row  mt-8 gap-[5%]'>
        {/* posts  */}
        <div className='w-[100%] md:w-[60%]'>
          {DUMMY_DATA.map((post, idx) => (
            <PostCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              description={post.description}
              views={post.views}
              user={post.user}
              button={post.button}
              extra={post.extra}
            />
          ))}
        </div>
        {/* sidebar  */}
        <div className='w-[100%] md:w-[35%] hidden md:block'>
          <Sidebar isAuthenticated={isAuthenticated}/>
        </div>
      </div>
    </div>
  )
}

export default Main