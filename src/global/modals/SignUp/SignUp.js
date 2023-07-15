import '../SignUp/signUp.css'
import { useState } from "react"
import GoogleButton from 'react-google-button'

const SignUp = ({ show, openLoginModal, onCloseButtonClick }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  if (!show) {
    return null;
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  return (
    <div className="modal-wrapper">

      <div className="body">
        <div className='sign__up'>
          <div className='sign__up-heading'>
            <h3>Sign up</h3>
            <button className='modal__close' onClick={onCloseButtonClick}><img src='../assets/layouts/modal-close.svg' alt='Modal Close' /></button>
          </div>
          <div className='sign__up-form'>
            <form className='form-signup'>
              <input type='text' placeholder='First Name' />
              <input type='text' placeholder='Last Name' />
              <input type='email' placeholder='Email*' />
              <input type='text' placeholder='Phone number*' />
              <div className='form__password'>
                <input type={passwordShown ? "text" : "password"} placeholder='Create your password' />
                <span onClick={togglePassword}><img className='password__icon' src='../assets/layouts/password-icon.svg' alt='Password Icon' /></span>
              </div>
              <input className='modal__form-submit' type='submit' value='Sign Up' />
            </form>
          </div>
          <div className='google__option'>
            <div className='google__option-text'>
              <div className='google__option-line'></div>
              <div className='google__option-line--text'> or</div>
              <div className='google__option-line'></div>
            </div>
            <button className='google__option-btn'>
              <GoogleButton
                onClick={() => { console.log('Google button clicked') }}
              />
            </button>
          </div>
          <p className='modal__text'>Already have an account? <a onClick={openLoginModal} href='#'>Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
