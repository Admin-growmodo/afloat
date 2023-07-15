import './ResetPassword.css'
import { useState } from "react"
import BackButton from './BackButton';

const ResetSuccessfull = ({ show, openLoginModal, onCloseButtonClick }) => {
    const [passwordShown, setPasswordShown] = useState(false);

    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      }

    const toggleConfirmPassword = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
    }

  if (!show) {
    return null;
  }

  return (
    <div className="modal-wrapper">

      <div className="body">
        <div className='reset__pass'>
          <div className='reset__pass-form'
          style={{marginTop: '0px'}}>

            <h3 className="reset__pass-success-heading" style={{marginBottom: '24px'}}>Password reset successfully!</h3>

            <div style={{textAlign: 'center', marginBottom: '24px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none">
                <rect x="0.5" y="0.5" width="70" height="70" rx="35" fill="#FA5959" />
                <path d="M49.6718 27.3977L31.7526 45.1742C31.6486 45.2775 31.5251 45.3594 31.3891 45.4153C31.2531 45.4712 31.1074 45.5 30.9602 45.5C30.813 45.5 30.6673 45.4712 30.5313 45.4153C30.3954 45.3594 30.2719 45.2775 30.1679 45.1742L22.3282 37.397C22.1181 37.1885 22 36.9057 22 36.6109C22 36.3161 22.1181 36.0333 22.3282 35.8248C22.5384 35.6164 22.8234 35.4993 23.1206 35.4993C23.4178 35.4993 23.7028 35.6164 23.9129 35.8248L30.9602 42.8174L48.0871 25.8256C48.2972 25.6171 48.5822 25.5 48.8794 25.5C49.1766 25.5 49.4616 25.6171 49.6718 25.8256C49.8819 26.0341 50 26.3168 50 26.6116C50 26.9065 49.8819 27.1892 49.6718 27.3977Z" fill="#FFFAFA" />
            </svg>
            </div>

          <input
                className='modal__form-submit'
                type='submit'
                value='Login'
                onClick={openLoginModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccessfull;
