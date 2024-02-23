import React from 'react'
import PostCard from './PostCard'

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
]

const Main = () => {
  return (
    <div className='custom-container-2'>
      {/* TOP HOMEPAGE NAVIGATION  */}
      <div className='flex justify-between items-center mt-4 border-b sticky top-0 pt-2 bg-white'>
          <div className='flex gap-6 -mb-3'>
            <p className='border-b-2 border-gray-500 pb-1'>All Posts (32)</p>
            <p className='text-gray-500 cursor-pointer border-gray-400 hover:text-black transition-all active:text-blue-500 mb-3'>Article</p>
            <p className='text-gray-500 cursor-pointer border-gray-400 hover:text-black transition-all active:text-blue-500 mb-3'>Event</p>
            <p className='text-gray-500 cursor-pointer border-gray-400 hover:text-black transition-all active:text-blue-500 mb-3'>Education</p>
            <p className='text-gray-500 cursor-pointer border-gray-400 hover:text-black transition-all active:text-blue-500 mb-3'>Job</p>
          </div>
          <div className='flex gap-2 mb-2'>
            <button className='bg-gray-200 px-4 py-2 rounded-lg'>Write Post</button>
            <button  className='bg-blue-600 px-4 py-2 rounded-lg text-white'>Join Group</button>
          </div>
      </div>

      {/* POSTS + Sidebar GRID  */}
      <div className='flex mt-8 gap-[5%]'>
        <div className='w-[60%]'>
          {DUMMY_DATA.map((post, idx) => (
            <PostCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              description={post.description}
              views={post.views}
              user={post.user}
            />
          ))}
        </div>
        <div className='bg-gray-200 w-[35%]'>sidebar</div>
      </div>
    </div>
  )
}

export default Main