/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Google from './icons8-google.svg';
import Apple from './apple.svg';
const SignInPage = () => {
  return (
    <div className="signin-page">
        <div className='board'>
            <p className='brd'>Board.</p>
        </div>
      <div className="signin-form">
        {/* Sign-in form content */}
        <h2>Sign In</h2>
        <h5>sign in your account</h5>
        <div className="signin-options">
          <button className="signin-google"><img src={Google} className='signin-logo' alt='google' /> Sign In with Google</button>&nbsp;&nbsp;
          <button className="signin-apple"><img src={Apple} className='signin-logo' alt='apple' /> Sign In with Apple</button><br/><br/>
        </div>
        <form className='form'>
          <label htmlFor="username">Email address</label><br />
          <input type="text" id="username" name="username" required /><br/>
          
          <label htmlFor="password">Password</label><br />
          <input type="password" id="password" name="password" required /><br />
          <a href="#">Forgot Password?</a><br/>
          <button type="submit" className='signin'>Sign In</button>
        </form>
        
        <div className="signin-links">
          
          <p>Don't have an account? <a href="#">Register now</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
