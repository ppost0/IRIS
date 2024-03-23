import React from "react";

const Login = () => {

  return (

    <div className='login-container flex flex-col items-center justify-center w-screen h-screen bg-blue-200 text-gray-700'>
      <h1 className='login-title font-bold text-3xl'>Welcome to IRIS</h1>
      <form className='flex flex-col bg-white rounded-md shadow-lg p-12 mt-12' action=''>
        <label htmlFor='usernameField' className='font-semibold text-xs'>Username or Email</label>
        <input className='flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2' type='text'></input>
        <label htmlFor='passwordField' className='font-semibold text-xs mt-3'>Password</label>
        <input className='flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2' type='password'></input>
        <button className='flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700'>Login</button>
        <div className='login-redirects flex mt-6 justify-center text-xs'>
          <a className='text-blue-400 hover:text-blue-500' href='#'>Forgot Password</a>
          <span class="mx-2 text-gray-300">/</span>
          <a className='text-blue-400 hover:text-blue-500' href='#'>Sign Up</a>
        </div>
      </form>


    </div>


  );
};


export default Login;

