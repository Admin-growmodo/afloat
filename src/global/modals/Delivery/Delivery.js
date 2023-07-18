import '../Delivery/delivery.css'
import { useState } from "react"

const Delivery = ({ show, onCloseButtonClick }) => {
  // const [passwordShown, setPasswordShown] = useState(false);

  if (!show) {
    return null;
  }

  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // }

  return (
    <div className="modal-wrapper">

      <div className="body">
        <div className='modal__container'>
          <div className='modal__heading'>
            <h3>Please, review delivery expectations</h3>
            <button className='modal__close' onClick={onCloseButtonClick}><img src='../assets/layouts/modal-close.svg' alt='Modal Close' /></button>
          </div>
          <div className='modal__body'>
            Order by noon for local delivery today Thursday, June, 15th. Orders placed after noon today will be delivered on Friday, June 16th.
          </div>

          <p className='modal__text'>
            <div className='modal__button_container'>
             <button className='primary-btn dont-add-to-bag text-white text-center col-md-6'>NO, DON'T ADD TO BAG</button>
             <button className='primary-btn add-to-bag text-white text-center col-md-6'>Add to cart</button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
