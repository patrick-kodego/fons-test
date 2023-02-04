import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <React.Fragment>
      <div className='auth-multi-layout'>
        <div className='auth-box'>
          <div className='auth-header'>
            <div className='auth-header-logo forgot-img'>
              <img src='https://cdn-icons-png.flaticon.com/512/733/733527.png' alt='' className='auth-header-logo-img' />
            </div>
          </div>
          <div className='auth-body'>
            <h1 className='auth-header-title'>Forgot Password?</h1>
            <p className='forgot-subtitle'>Enter your email and we'll send you instructions to reset everything.</p>
            <br />
            <form className='auth-form-validation'>
              <div className='input-field'>
                <label htmlFor='email' className='input-label'>
                  Email Address
                </label>
                <input type='text' className='input-control' id='email' placeholder='example@hotmail.com' autoComplete='off' required />
              </div>
              <button type='submit' className='btn-submit'>
                Send Link Notification
              </button>
            </form>
            <div className='flex-end'>
            <Link to={'/signin'} className='btn-back-to-log-in'>
              Back to login
            </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
