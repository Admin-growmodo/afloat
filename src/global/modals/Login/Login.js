import '../Login/login.css'
import { useState } from "react"
import GoogleButton from 'react-google-button'

const Login = ({ show, onCloseButtonClick }) => {
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
        <div className='log__in'>
          <div className='log__in-heading'>
            <h3>Login</h3>
            <button className='modal__close' onClick={onCloseButtonClick}><img src='../assets/layouts/modal-close.svg' alt='Modal Close' /></button>
          </div>
          <div className='log__in-form'>
            <form className='form-login'>
              <input type='email' placeholder='Email*' />
              <div className='form__password'>
                <input type={passwordShown ? "text" : "password"} placeholder='Password' />
                <span onClick={togglePassword}><img className='password__icon' src='../assets/layouts/password-icon.svg' alt='Password Icon' /></span>
              </div>
              <input className='modal__form-submit' type='submit' value='Log In' />
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
          <p className='modal__text'>Already have an account? <a href='#'>Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
