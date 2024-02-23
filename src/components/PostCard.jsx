import React, { useState } from 'react'

const PostCard = ({ image, category, title, description, views, user, extra, button}) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border mb-4 rounded-lg'>
        {image && <img src={image} alt="" className='w-full h-56 object-cover rounded-t-lg' />}
        <div className='p-4'>
            <div className='mb-2'>{category}</div>
            <div className='relative z-10 flex items-start justify-between gap-4'>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <div onClick={toggleDropdown} className={`cursor-pointer py-2 px-4 rounded-lg ${isOpen ? 'bg-gray-200' : ''}`}>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
                {isOpen && (
                <div
                className="origin-top-right top-8 right-0 absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
                >
                <div className="py-1" role="none">
                    {/* Dropdown items */}
                    <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    >
                    Edit
                    </a>
                    <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    >
                    Report
                    </a>
                    <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    >
                    Option 3
                    </a>
                </div>
                </div>
            )}
            </div>
            
            {description && <p className='text-[#5C5C5C] mt-2'>{description}</p>}
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
                    <p><i className="fa-solid fa-share-nodes text-xl mr-2"></i></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard