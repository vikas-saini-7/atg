import React from 'react'

const PostCard = ({ image, category, title, description, views, user }) => {
  return (
    <div className='border mb-4 rounded-lg'>
        <img src={image} alt="" className='w-full h-56 object-cover rounded-t-lg' />
        <div className='p-4'>
            <div className='mb-2'>{category}</div>
            <h1 className='text-lg'>{title}</h1>
            <p className='text-gray-500'>{description}</p>
            <div className='flex justify-between mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='w-10 rounded-full' src={user.image} alt="" />
                    <p>{user.name}</p>
                </div>
                <div className='flex items-center gap-6 text-gray-500'>
                    <p>{views} views</p>
                    <p>share</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard