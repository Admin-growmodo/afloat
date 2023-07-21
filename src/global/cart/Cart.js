import './cart.css'
import { useState } from 'react'
function Cart({ product_images,product_title, product_price, product_quanity, dontDisplayCheckoutBtn = false}) {
    const [count, setCount] = useState(1);
    const handleAddQuantity = (num, action) => {
        if (action === 'add') {
            setCount(current => current + num);
        } else {
            if (count > 0) {
                setCount(current => current - num);
            }
        }
    };
    
    function quantityReset(){
        setCount(0);
    }

    return (
        <div className='cart'>
            <div className='cart__wrapper'>
                <div className='cart__wrapper-col--image'>
                    <img className='cart__image' src={product_images} />
                </div>
                <div className='cart__wrapper-col'>
                    <p className='cart__title'>{product_title}</p>
                    <p className='cart__price'>{product_price}</p>
                    <div className='cart__quantity-wrapper'>
                        <button className='cart__quantity-btn' onClick={() => handleAddQuantity(1, 'subtract')}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_844_10852)"><path d="M4.94444 11.2778L20.0556 11.2778C20.2579 11.2778 20.4399 11.3352 20.5632 11.4222C20.6854 11.5085 20.7222 11.6009 20.7222 11.6667C20.7222 11.7324 20.6854 11.8249 20.5632 11.9111C20.4399 11.9981 20.2579 12.0556 20.0556 12.0556L4.94444 12.0556C4.74212 12.0556 4.56006 11.9981 4.43681 11.9111C4.31461 11.8249 4.27778 11.7324 4.27778 11.6667C4.27778 11.6009 4.31461 11.5085 4.43681 11.4222C4.56006 11.3352 4.74212 11.2778 4.94444 11.2778Z" fill="#161616" stroke="#161616" strokeWidth="0.555556"/></g><defs><clipPath id="clip0_844_10852"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></button>
                            <p className='cart__quantity-count'>{count}</p>
                        <button className='cart__quantity-btn' onClick={() => handleAddQuantity(1, 'add')}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_844_10854)"><path d="M12.389 11.6108V11.333L12.389 3.99967C12.389 3.89653 12.348 3.79762 12.2751 3.72469M12.389 11.6108L12.2751 3.72469M12.389 11.6108H12.6668H20.0001C20.1033 11.6108 20.2022 11.6518 20.2751 11.7247C20.348 11.7976 20.389 11.8965 20.389 11.9997C20.389 12.1028 20.348 12.2017 20.2751 12.2747C20.2022 12.3476 20.1033 12.3886 20.0001 12.3886H12.6668H12.389V12.6663V19.9997C12.389 20.1028 12.348 20.2017 12.2751 20.2747C12.2022 20.3476 12.1033 20.3886 12.0001 20.3886C11.897 20.3886 11.7981 20.3476 11.7251 20.2747C11.6522 20.2017 11.6112 20.1028 11.6112 19.9997V12.6263V12.3486H11.3334L4.00011 12.3486H3.98624L3.97244 12.3499C3.92567 12.3546 3.87844 12.3492 3.83393 12.3341C3.78942 12.319 3.74866 12.2945 3.71442 12.2623C3.68017 12.2301 3.65322 12.191 3.63538 12.1475C3.61754 12.104 3.60924 12.0572 3.61102 12.0102L3.61122 12.0102V11.9997C3.61122 11.8965 3.65219 11.7976 3.72513 11.7247C3.79806 11.6518 3.89697 11.6108 4.00011 11.6108L11.3334 11.6108H11.6112V11.333L11.6112 3.99967C11.6112 3.89653 11.6522 3.79762 11.7251 3.72469L11.5289 3.52844L11.7251 3.72469C11.7981 3.65176 11.897 3.61079 12.0001 3.61079C12.1033 3.61079 12.2022 3.65176 12.2751 3.72469M12.389 11.6108L12.4715 3.52827L12.2751 3.72469" fill="#161616" stroke="#161616" strokeWidth="0.555556"/></g><defs><clipPath id="clip0_844_10854"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></button>
                        <button className='cart__remove-btn' onClick={quantityReset}>Remove</button>
                    </div>
                </div>
            </div>
            <div className='cart__total'>
                <div className='cart__total-row'>
                    <p className='cart__total-title'>Subtotal</p>
                    <p className='cart__total-price'>$149.00 USD</p>
                </div>
                <div className='cart__total-row'>
                    <p className='cart__total-title'>Gift wrap & delivery</p>
                    <p className='cart__total-price'>$0 USD</p>
                </div>
                <div className='cart__total-row'>
                    <p className='cart__total-title'>Estimated tax</p>
                    <p className='cart__total-price'>$7 USD</p>
                </div>
                <div className='cart__total-row'>
                    <p className='cart__total-title'>Total</p>
                    <p className='cart__total-price'>$156.00 USD</p>
                </div>
            </div>
            <div className='cart__delivery-wrapper'>
                <h3 className='cart__delivery-title'><img className='delivery-expectations-icon' src='../assets/layouts/product/delivery-expectations-icon.svg' alt="delivery" />Delivery expectations</h3>
                <p className='cart__delivery-text'>Order by noon for local delivery today Thursday, June, 15th. Orders placed after noon today will be delivered on Friday, June 16th.</p>                   
            </div>
            {dontDisplayCheckoutBtn 
            ? ''
            :
            <div className='cart__checkout'>
                <button className='cart__checkout-btn primary-btn'>Checkout</button>
            </div>
            }

        </div>
    );
}

export default Cart;