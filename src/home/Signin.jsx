import './app.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Home from './Home';

const Signin = () => {
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem('signUp');
  const localEmail = localStorage.getItem('email');
  const localPassword = localStorage.getItem('password');
  
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });

  const handleSignin = () => {
    if (email.current.value == localEmail && password.current.value == localPassword) {
      localStorage.setItem('signUp', email.current.value);
    } else {
      alert('Please enter valid username or password');
    }
  };

  return (
    <React.Fragment>
      <div className='auth-multi-layout'>
        {showHome? (<Home/>) : ( <div className='auth-box'>
          <div className='auth-header'>
            <div className='auth-header-logo'>
              <img src='https://www.kindpng.com/picc/m/226-2261629_alpha-symbol-png-alpha-symbol-logo-png-transparent.png' alt='Alpha Symbol Png - Alpha Symbol Logo Png, Transparent Png@kindpng.com' className='auth-header-logo-img' />
            </div>
            <h1 className='auth-header-title'>Welcome to Alpha Coding</h1>
            <p className='auth-header-subtitle'>Sign in to your account and start coding hard.</p>
          </div>
          <div className='auth-body'>
            <form className='auth-form-validation'>
              <div className='input-field'>
                <label htmlFor='email' className='input-label'>
                  Email Address
                </label>
                <input type='text' ref={email} className='input-control' id='email' placeholder='example@hotmail.com' required/>
              </div>
              <div className='input-field'>
                <label htmlFor='password' className='input-label'>
                  Password:
                </label>
                <input type='password' ref={password} name='password' className='input-control' id='password' placeholder='password' required/>
              </div>
              <div className='flex-end'>
                <Link to={"/forgot-password"} className='link-end'>
                  Forgot password?
                </Link>
              </div>
              <button type='submit' className='btn-submit' onClick={handleSignin}>
                Sign in
              </button>
            </form>
            <p className='text-center'>New on our code-bot? <Link to={"/signup"} className="link-text-center">Create Account here</Link></p>
          </div>
        </div>)}
      </div>
    </React.Fragment>
  );
};

export default Signin;
