import React, {useState, Fragment} from 'react'
import ModalComponent from './ModalComponent';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [signUp, setSignUp] = useState(true);

  
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
    {/* modal  */}
    <div>
      <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}>
        {signUp ?
          <SignUp/>
        :
          <SignIn/>
        }
        <button onClick={closeModal}>Close Modal</button>
      </ModalComponent>
    </div>

    {/* header  */}
    <div className='flex justify-between items-center px-[5%] py-6 border-b-2 h-[72px]'>
      <img src="./images/logo.svg" alt="" />
      <div>
        <input type="text" className='text-sm bg-gray-200 px-6 py-3 w-[130%] rounded-full' placeholder='Search for your favorite groups in ATG' />
      </div>
      <div className='cursor-pointer' onClick={openModal}>Create account. <span className='text-blue-700 font-semibold'>It's free!</span></div>
    </div>
    </>
  )
}

export default Header