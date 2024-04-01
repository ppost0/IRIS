import React from "react";
import logo from '../assets/images/1.png'

const Signup = () => {

  return (

    <div className='signup-container flex flex-col items-center justify-center w-screen h-screen bg-neutral-900 text-stone-300'>
      <h1 className='signup-title font-bold text-2xl'>Welcome</h1>
      <div className='flex'>
        <div className='signup-logo-container flex items-center'>
          <img id='signup-logo' className='logo p-8 mt-12' src={logo}/>
        </div>
        <form className='flex flex-col bg-stone-800 rounded-md shadow-lg p-12 mt-12' action=''>
          <label htmlFor='emailField' className='font-semibold text-xs'>Email</label>
          <input className='flex items-center h-12 px-4 w-64 bg-neutral-700 mt-2 rounded focus:outline-none focus:ring-2' type='email'></input>
          <label htmlFor='usernameField' className='font-semibold text-xs'>Username</label>
          <input className='flex items-center h-12 px-4 w-64 bg-neutral-700 mt-2 rounded focus:outline-none focus:ring-2' type='text'></input>
          <label htmlFor='passwordField' className='font-semibold text-xs mt-3'>Password</label>
          <input className='flex items-center h-12 px-4 w-64 bg-neutral-700 mt-2 rounded focus:outline-none focus:ring-2' type='password'></input>
          <label htmlFor='reEnterPasswordField' className='font-semibold text-xs mt-3'>Re-enter Password</label>
          <input className='flex items-center h-12 px-4 w-64 bg-neutral-700 mt-2 rounded focus:outline-none focus:ring-2' type='password'></input>
          <button className='flex items-center justify-center h-12 px-6 w-64 bg-blue-500 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-600'>Sign Up</button>
          <div className='signup-redirects flex mt-6 justify-center text-xs'>
            <a className='text-blue-500 hover:text-blue-600' href='#'>Forgot Password</a>
            <span id='signup-logo' className="mx-2 text-neutral-700">/</span>
            <a className='text-blue-500 hover:text-blue-600' href='#'>Login</a>
          </div>
        </form>
      </div>

    </div>


  );
};


export default Signup;

