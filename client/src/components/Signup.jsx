import React from "react";
import logo from '../assets/images/1.png'

const Signup = () => {




    const signupUser = async () => {
      try {
        // if (document.getElementById('passwordField').value === document.getElementById('reEnterPasswordField').value) {
          const response = await fetch('/api/users', {
            method: 'POST',
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: document.getElementById('emailField').value,
              firstname: document.getElementById('firstNameField').value,
              lastname: document.getElementById('lastNameField').value,
              username: document.getElementById('usernameField').value,
              password: document.getElementById('passwordField').value
            })
          })

          if (response.status === 200) window.alert('Signup successful!');
          else window.alert('Something went wrong. Please try again.');


      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }









  return (

    <div className='signup-container flex flex-col items-center justify-center w-screen h-screen bg-neutral-900 text-stone-300'>
      <h1 className='login-title font-bold text-2xl'>Welcome</h1>
      <div className='flex'>
        <div className='signup-logo-container flex items-center'>
          <img id='signup-logo' className='logo p-8 mt-12' src={logo}/>
        </div>
        <form className='grid grid-cols-2 gap-3 bg-stone-800 rounded-md shadow-lg p-12 mt-12' action=''>
          <div>
            <label htmlFor='emailField' className='font-semibold text-xs mt-3'>Email</label>
            <input id='emailField' className='flex items-center h-12 px-4 w-64 bg-neutral-700 mt-2 rounded focus:outline-none focus:ring-2' type='email'></input>
          </div>
          <div>
            <label htmlFor='usernameField' className='font-semibold text-xs mt-3'>Username</label>
            <input id='usernameField' className='flex items-center h-12 px-4 w-64 bg-neutral-700 mt-2 rounded focus:outline-none focus:ring-2' type='text'></input>
          </div>
          <div>
            <label htmlFor='firstNameField' className='font-semibold text-xs mt-3'>First name</label>
            <input id='firstNameField' className='flex items-center h-12 px-4 w-64 bg-neutral-700 mt-2 rounded focus:outline-none focus:ring-2' type='text'></input>
          </div>
          <div>
            <label htmlFor='lastNameField' className='font-semibold text-xs mt-3'>Last name</label>
            <input id='lastNameField' className='flex items-center h-12 px-4 w-64 bg-neutral-700 mt-2 rounded focus:outline-none focus:ring-2' type='text'></input>
          </div>
          <div>
            <label htmlFor='passwordField' className='font-semibold text-xs mt-3'>Password</label>
            <input id='passwordField' className='flex items-center h-12 px-4 w-64 bg-neutral-700 mt-2 rounded focus:outline-none focus:ring-2' type='password'></input>
          </div>
          <div>
            <label htmlFor='reEnterPasswordField' className='font-semibold text-xs mt-3'>Re-enter Password</label>
            <input className='flex items-center h-12 px-4 w-64 bg-neutral-700 mt-2 rounded focus:outline-none focus:ring-2' type='password'></input>
          </div>
          <button onClick={signupUser} type='button' className='flex items-center justify-center h-12 px-6 w-64 bg-blue-500 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-600'>Sign Up</button>
          <div className='signup-redirects items-center flex mt-6 justify-center text-xs'>
            <a className='text-blue-500 hover:text-blue-600' href='#'>Forgot Password</a>
            <span id='signup-logo' className="mx-2 text-neutral-700">/</span>
            <a className='text-blue-500 hover:text-blue-600' href='/'>Login</a>
          </div>
        </form>
      </div>

    </div>

  );
};


export default Signup;

