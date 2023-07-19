import './ResetPassword.css'
import { useState } from "react"
import BackButton from './BackButton';

const ResetPasswordForm = ({ show, openLoginModal, onCloseButtonClick, openResetSuccessfull }) => {
    const [passwordShown, setPasswordShown] = useState(false);

    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      }

    const toggleConfirmPassword = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
    }

    const handleResetPassword  = () => {
        if (password === confirmPassword) {
            openResetSuccessfull();
        }
    }

  if (!show) {
    return null;
  }

  return (
    <div className="modal-wrapper">

      <div className="body">
        <div className='reset__pass'>
          <div className='reset__pass-heading'>
            <div>
                <BackButton onClick={openLoginModal}/>

                <h3>Reset Password</h3>
            </div>
            
            <button className='modal__close' onClick={onCloseButtonClick}><img src='../assets/layouts/modal-close.svg' alt='Modal Close' /></button>
          </div>
          <div className='reset__pass-form'>
            <p className='reset__pass-guide'>Choose a new password for your account</p>

            <form className='form-reset-pass'>
            <div className='form__password'>
                <input type={passwordShown ? "text" : "password"} placeholder='Create your password' onInput={e => {
                    setPassword(e.target.value)
                }}/>
                <span onClick={togglePassword}><img className='password__icon' src='../assets/layouts/password-icon.svg' alt='Password Icon' /></span>
            </div>

            <div className='form__password'>
                <input type={confirmPasswordShown ? "text" : "password"} placeholder='Confirm your password' onInput={e => { setConfirmPassword(e.target.value) }} />
                <span onClick={toggleConfirmPassword}><img className='password__icon' src='../assets/layouts/password-icon.svg' alt='Password Icon' /></span>
            </div>

            <input
                className='modal__form-submit'
                type='submit'
                value='Reset Password'
                onClick={handleResetPassword}
            />
            </form>
          </div>
          <p className='modal__text'><a href='#' onClick={openLoginModal}>Back to login</a></p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
