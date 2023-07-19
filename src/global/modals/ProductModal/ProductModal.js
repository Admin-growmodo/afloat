import './productmodal.css'
import { Link } from 'react-router-dom'
// import {useState} from 'react'

const ProductModal = ({ show, onCloseButtonClick, openSidebar }) => {

  if (!show) {
    return null;
  }

  return (
    <div className="modal-wrapper">
      <div className="body">
        <div className='product__modal'>
          <div className='product__modal-heading'>
            <h3>Please, review delivery expectations</h3>
            <button className='modal__close' onClick={onCloseButtonClick}><img src='../assets/layouts/modal-close.svg' alt='Modal Close' /></button>
          </div>
          <div className='product__modal-text'>
            <p>Order by noon for local delivery today Thursday, June, 15th. Orders placed after noon today will be delivered on Friday, June 16th.</p>
          </div>
          <div className='product__modal-btns'>
            <Link className='secondary-btn' onClick={onCloseButtonClick}>no, don’t Add to bag</Link>
            <Link className='primary-btn' onClick={openSidebar}>Add to Bag</Link>
          </div>
        </div>
      </div>
    </div>
  );

};

export default ProductModal;
