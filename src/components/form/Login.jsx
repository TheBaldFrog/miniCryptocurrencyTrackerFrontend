import React from 'react';

export default function Login() {
    return (
        <React.Fragment>
            <div>
                <h1 className='text-3xl font-bold text-center mb-4 cursor-pointer'>
                    Welcome to Cryptoviewer!
                </h1>
                <p className='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto'>
                    Please login to your account
                </p>
            </div>
            <form>
                <div className='space-y-4'>
                    <input type='text' placeholder='username'
                           className='border-gray-400 block text-sm py-3  rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400'

                    />
                    <input type='password' placeholder='password'
                           className='block text-sm py-3 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400'

                    />
                </div>
                <div className='text-center mt-6'>
                    <button type='submit'
                            className='py-3 w-64 text-xl bg-white rounded-2xl hover:bg-yellow-300 active:bg-yellow-500 outline-none hover:cursor-pointer'>
                        Sign in
                    </button>
                    <p className='mt-4 text-sm'>You don't have an account? <span
                        className='underline cursor-pointer'>Register</span> or <span
                        className='underline cursor-pointer'>Forgot password</span>
                    </p>
                </div>
            </form>
        </React.Fragment>
    )
}