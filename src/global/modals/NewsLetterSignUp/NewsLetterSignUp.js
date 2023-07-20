import './NewsLetterSignUp.css'
import { useState } from "react"
import GoogleButton from 'react-google-button'

const NewsLetterSignUp = ({ show, onCloseButtonClick }) => {
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
        <div className='newsletter__signup'>
          <div className='newsletter__signup-heading'>
            <h3>Treat yo'self!</h3>
            <button className='modal__close' onClick={onCloseButtonClick}><img src='../assets/layouts/modal-close.svg' alt='Modal Close' /></button>
          </div>

          <h4 class="newsletter__signup-subheading">
            Sign up to be an Afloat insider and receive the latest scoop on new gifts, stores, and features added to the app.
          </h4>
          
          <div className='newsletter__signup-form'>
            <form className='form-newsletter-signup'>
              <input type='text' placeholder='First Name' />

              <input type='text' placeholder='Last Name' />

              <input type="email" placeholder="Email*"/>

              <input type='number' placeholder='Zipcode*' />

              <input className='modal__form-submit' type='submit' value='Submit' onClick={onCloseButtonClick}/>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSignUp;
