import React from 'react'

const SignUp = ({GoToSignIn, handleAuthenticated, openModal, closeModal}) => {
  return (
    <div className='mb-4'>
        <div style={{color: '#008A45', backgroundColor: '#EFFFF4'}} className='py-4 px-4 font-semibold text-center rounded-t-lg hidden md:block'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
        <div className='flex justify-between p-6'>
            <h1 className='font-bold text-2xl'>Create Account</h1>
            <p className='cursor-pointer hidden md:block' onClick={GoToSignIn}>Already have an account? <span className='text-blue-600'>Sign In</span></p>
            <p className='block md:hidden' onClick={closeModal}><i class="fa-solid fa-circle-xmark text-xl"></i></p>
        </div>
        <div className='flex'>
            <form className='flex-1 px-4 pl-8 flex flex-col gap-2'>
                <div>
                    <input className='w-1/2 border mb-2 p-2 bg-gray-50 border-gray-300 rounded' type="text" placeholder='First Name' />
                    <input className='w-1/2 border mb-2 p-2 bg-gray-50 border-gray-300 rounded' type="text" placeholder='Last Name' />
                </div>
                <input className='w-full border mb-2 p-2 bg-gray-50 border-gray-300 rounded' type="email" placeholder='Email' />
                <input className='w-full border mb-2 p-2 bg-gray-50 border-gray-300 rounded' type="password" placeholder='Password' />
                <input className='w-full border p-2 bg-gray-50 border-gray-300 rounded' type="password" placeholder='Confirm Password' />
                <div className='flex justify-between items-center'>
                    <button onClick={handleAuthenticated} className='rounded-full bg-blue-500 md:w-full my-4 py-2 px-4 text-white'>Create Account</button>
                    <p className='block md:hidden' onClick={GoToSignIn}>or Sign In</p>
                </div>
                <div>

                {/* OAUTH  */}
                <button onClick={handleAuthenticated}  className='rounded-lg bg-gray-100 w-full my-1 py-2 flex items-center justify-center gap-2'>
                    <img className='w-6' src="./images/fb.png" alt="" />
                    <p>Sign up with Facebook</p>
                </button>
                <button onClick={handleAuthenticated}  className='rounded-lg bg-gray-100 w-full my-1 py-2 flex items-center justify-center gap-2'>
                    <img className='w-5'  src="./images/ggl.png" alt="" />
                    <p>Sign up with Google</p>
                </button>
                </div>
            </form>
            <div className='flex-1 hidden md:flex flex-col'>
                <img src="./images/atg_illustration.svg" alt="" />
                <p className='text-xs text-gray-500'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>
        </div>
    </div>
  )
}

export default SignUp