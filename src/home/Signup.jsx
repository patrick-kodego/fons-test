import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Signup = () => {

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem('signUp');
  const localEmail = localStorage.getItem('email');
 
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem('name', name.current.value);
      localStorage.setItem('email', email.current.value);
      localStorage.setItem('password', password.current.value);
      localStorage.removeItem("signUp");
      alert('Account created sucessfully!');
    }
  };


  return (
    <React.Fragment>
    <div className='auth-multi-layout'>
      <div className='auth-box'>
        <div className='auth-header'>
          <div className='auth-header-logo'>
            <img src='https://www.kindpng.com/picc/m/226-2261629_alpha-symbol-png-alpha-symbol-logo-png-transparent.png' alt='Alpha Symbol Png - Alpha Symbol Logo Png, Transparent Png@kindpng.com' className='auth-header-logo-img' />
          </div>
          <h1 className='auth-header-title'>Create Account</h1>
          <p className='auth-header-subtitle'>Create account and start coding hard</p>
        </div>
        <div className='auth-body'>
          <form className='auth-form-validation'>
            <div className='input-field'>
              <label htmlFor='full-name' className='input-label'>
                Full Name
              </label>
              <input type='text' ref={name} className='input-control' id='full-name' placeholder='John Daw' />
            </div>

            <div className='input-field'>
              <label htmlFor='email' className='input-label'>
                Email
              </label>
              <input type='text' ref={email} className='input-control' id='email' placeholder='example@hotmail.com' />
            </div>



            <div className='input-field'>
              <label htmlFor='password' className='input-label'>
                Password:
              </label>
              <input type='password' ref={password} name='password' className='input-control' id='password' placeholder='password' />
            </div>
           
            <button type='submit' onClick={handleClick} className='btn-submit'>
              Create Account
            </button>
          </form>
          <p className='text-center'>
            Already have an account?
            <Link to={"/signin"} className="link-text-center"> Sign-in instead</Link></p>
        </div>
      </div>
    </div>
  </React.Fragment>
    
  )
}

export default Signup