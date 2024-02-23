import React, {useState, Fragment} from 'react'
import ModalComponent from './ModalComponent';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Header = ({handleAuthenticated, modalIsOpen, setModalIsOpen, isAuthenticated, openModal, closeModal}) => {
  const [signUp, setSignUp] = useState(true);

  const GoToSignIn = () => {
    setSignUp(false)
  }
  const GoToSignUp = () => {
    setSignUp(true)
  }
  

  return (
    <>
    {/* modal  */}
    <div>
      <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}>
        {signUp ?
          <SignUp
          GoToSignIn={GoToSignIn}
          handleAuthenticated={handleAuthenticated}
          openModal={openModal}
          closeModal={closeModal}
          
          />
        :
          <SignIn
          GoToSignUp={GoToSignUp}
          handleAuthenticated={handleAuthenticated}
          openModal={openModal}
          closeModal={closeModal}
          />
        }
      </ModalComponent>
    </div>

    {/* HEADER LARGE SCREEN */}
    <div className='hidden md:flex justify-between items-center px-[5%] py-6 border-b-2 h-[72px]'>
      <img src="./images/logo.svg" alt="" />
      <div className='relative'>
        <i className="fa-solid fa-magnifying-glass absolute top-[15px] left-4 text-[18px] text-gray-500"></i>
        <input type="text" className='text-sm bg-gray-200 px-6 py-3 pl-10 w-[60%] lg:w-[130%] rounded-full outline-none' placeholder='Search for your favorite groups in ATG' />
      </div>
      {isAuthenticated ?
        <div className='flex items-center gap-3'>
          <img className='w-10 h-10 object-cover rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHjMzM5qzBjS64SJEIyCQkLgXODzDLznFPOt54tmyPNXP3BQ78_AN83FAlbeGujmuPCg&usqp=CAU' alt="" />
          <p>Siddharth Goyal</p>
        </div>
      :
        <div className='cursor-pointer' onClick={openModal}>Create account. <span className='text-blue-700 font-semibold'>It's free! </span><i class="fa-solid fa-chevron-down text-xs"></i></div>
      }
    </div>

    {/* HEADER SMALL SCREEN */}
    <button
      onClick={openModal}
      className="block md:hidden fixed bottom-4 w-14 h-14 right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full shadow-lg"
    >
      <i class="fa-solid fa-pen"></i>
    </button>
    </>
  )
}

export default Header