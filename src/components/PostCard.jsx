import React from 'react'

const PostCard = ({ image, category, title, description, views, user, extra, button}) => {
  return (
    <div className='border mb-4 rounded-lg'>
        {image && <img src={image} alt="" className='w-full h-56 object-cover rounded-t-lg' />}
        <div className='p-4'>
            <div className='mb-2'>{category}</div>
            <h1 className='text-lg font-semibold'>{title}</h1>
            {description && <p className='text-[#5C5C5C]'>{description}</p>}
            {extra && 
            <div className='flex gap-12 text-sm my-3'>
                <div>{extra.label}</div>
                <div>{extra.location}</div>
            </div>
            }
            {button && <button style={{color: button==='Visit Website'? '#E56135' : '#02B875'}} className='font-semibold w-full border rounded my-2 py-2'>{button}</button> }
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