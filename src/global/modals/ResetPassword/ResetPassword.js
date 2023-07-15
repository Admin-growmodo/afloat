import './ResetPassword.css'
import { useRef  } from "react"
import BackButton from './BackButton';

const ResetPassword = ({ show, openLoginModal,onCloseButtonClick, openResetEmailSent}) => {
    
  const emailInputRef = useRef(null);

  if (!show) {
    return null;
  }


  

  const handleResetPassword = (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      // Email format is not valid
      return;
    }

    const transformedEmail = transformEmail(email);

    openResetEmailSent(transformedEmail);
  }

  const transformEmail = (email) => {
    
    const [username, domain] = email.split('@');

    const transformedUsername = username.replace(/^(.)(.*?)(.)$/, (_, firstChar, maskedChars, lastChar) => {
      const maskedMiddleChars = maskedChars.replace(/./g, "*");
      return `${firstChar}${maskedMiddleChars}${lastChar}`;
    });
    
    const transformedDomain = domain.replace(/^(.)(.*?)(\..+)$/, (_, firstChar, maskedChars, domainEnd) => {
      const maskedMiddleChars = maskedChars.replace(/./g, "*");
      return `${firstChar}${maskedMiddleChars}${domainEnd}`;
    });
    
    const transformedEmail = `${transformedUsername}@${transformedDomain}`;

    return transformedEmail
  }

  

  
  return (
    <div className="modal-wrapper">

      <div className="body">
        <div className='reset__pass'>
          <div className='reset__pass-heading'>
            <div>
                <BackButton onClick={openLoginModal}/>

                <h3>Reset your password</h3>
            </div>
            
            <button className='modal__close' onClick={onCloseButtonClick}><img src='../assets/layouts/modal-close.svg' alt='Modal Close' /></button>
          </div>
          <div className='reset__pass-form'>
            <p className='reset__pass-guide'>Enter the email you used to create your account so we can send you instructions on how to reset your password.</p>
            <form className='form-reset-pass'>
              <input type='email' placeholder='Email' ref={emailInputRef}/>
             
              <input className='modal__form-submit' type='submit' value='Reset Password' onClick={handleResetPassword}/>
              
            </form>
          </div>
          <p className='modal__text'><a href='#' onClick={openLoginModal}>Back to login</a></p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
