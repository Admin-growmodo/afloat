import './ResetPassword.css'
import { useState } from "react"
import BackButton from './BackButton';

const ResetEmailSent = ({ show, openLoginModal, openResetPasswordModal,openResetPasswordForm, onCloseButtonClick, emailReset }) => {

  if (!show) {
    return null;
  }

  function handleResendEmail(e) {
    e.preventDefault()
    openResetPasswordForm();
    console.log('should go to reset password form')
  }

  return (
    <div className="modal-wrapper">

      <div className="body">
        <div className='reset__pass'>
          <div className='reset__pass-heading'>
            <div>
                <BackButton onClick={openResetPasswordModal}/>

                <h3>Check your Email</h3>
            </div>
            
            <button className='modal__close' onClick={onCloseButtonClick}><img src='../assets/layouts/modal-close.svg' alt='Modal Close' /></button>
          </div>
          <div className='reset__pass-form'>
            <p className='reset__pass-guide'>We have sent an email with password reset information to {emailReset}.</p>

            <p className='reset__pass-guide'>Didn't receive the email? Check spam or promotion folder.</p>


            <form className='form-reset-pass'>
              <input type='email' placeholder='Email' />
             
            <input
                className='modal__form-submit'
                type='submit'
                value='Resend
                Email'
                onClick={handleResendEmail}
            />
            </form>
          </div>
          <p className='modal__text'><a href='#' onClick={openLoginModal}>Back to login</a></p>
        </div>
      </div>
    </div>
  );
};

export default ResetEmailSent;
