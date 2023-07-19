import './cart.css'
import { useState } from 'react'
function Cart({ product_images,product_title, product_price, product_quanity}) {
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
                        <button onClick={() => handleAddQuantity(1, 'subtract')}>-</button>
                            <p className='cart__quantity-count'>{count}</p>
                        <button onClick={() => handleAddQuantity(1, 'add')}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;