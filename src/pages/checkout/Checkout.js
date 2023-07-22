import Heading from '../../global/heading/Heading';
import Main from '../../global/main/Main'; 
import Cart from '../../global/cart/Cart';
import { SELECTED_PRODUCT } from '../../global/product/Content/constant';
import './checkout.css'
import {Link} from 'react-router-dom';

export default function Checkout() {
    let products = SELECTED_PRODUCT[0];

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <>
        <Heading style={{marginTop: '39px'}} headingText="Your cart" />
        <Main containerClass="checkout-page-container">
            <div className="row row-1">
                <div className="col-6 left-panel">
                    <div className="col-8">
                        <div className='sidebar__text'>
                            <p>Our gift to you - use code WELCOMEGIFT for free delivery on your first gift sent with Afloat!</p>
                        </div>

                        <Cart
                          dontDisplayCheckoutBtn={true}
                          product_images={products.images[0]}
                          product_title={products.title}
                          product_price={products.price}
                          product_quanity={1}
                        />

                        <Link to="/shop" onClick={scrollToTop}>
                            <div className="add-more-items-container">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_844_10854)"><path d="M12.389 11.6108V11.333L12.389 3.99967C12.389 3.89653 12.348 3.79762 12.2751 3.72469M12.389 11.6108L12.2751 3.72469M12.389 11.6108H12.6668H20.0001C20.1033 11.6108 20.2022 11.6518 20.2751 11.7247C20.348 11.7976 20.389 11.8965 20.389 11.9997C20.389 12.1028 20.348 12.2017 20.2751 12.2747C20.2022 12.3476 20.1033 12.3886 20.0001 12.3886H12.6668H12.389V12.6663V19.9997C12.389 20.1028 12.348 20.2017 12.2751 20.2747C12.2022 20.3476 12.1033 20.3886 12.0001 20.3886C11.897 20.3886 11.7981 20.3476 11.7251 20.2747C11.6522 20.2017 11.6112 20.1028 11.6112 19.9997V12.6263V12.3486H11.3334L4.00011 12.3486H3.98624L3.97244 12.3499C3.92567 12.3546 3.87844 12.3492 3.83393 12.3341C3.78942 12.319 3.74866 12.2945 3.71442 12.2623C3.68017 12.2301 3.65322 12.191 3.63538 12.1475C3.61754 12.104 3.60924 12.0572 3.61102 12.0102L3.61122 12.0102V11.9997C3.61122 11.8965 3.65219 11.7976 3.72513 11.7247C3.79806 11.6518 3.89697 11.6108 4.00011 11.6108L11.3334 11.6108H11.6112V11.333L11.6112 3.99967C11.6112 3.89653 11.6522 3.79762 11.7251 3.72469L11.5289 3.52844L11.7251 3.72469C11.7981 3.65176 11.897 3.61079 12.0001 3.61079C12.1033 3.61079 12.2022 3.65176 12.2751 3.72469M12.389 11.6108L12.4715 3.52827L12.2751 3.72469" fill="#161616" stroke="#161616" strokeWidth="0.555556"/></g><defs><clipPath id="clip0_844_10854"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                        
                                <span>Add more items</span>
                            </div>
                        </Link>
                       
                    </div>
                </div>

                <div className="col-6 right-panel">
                    <div className="col-8">
                        <div className="section">
                            <h3>A special delivery for</h3>

                            <input type="text" placeholder='To'/>

                            <input type="text" placeholder='From'/>

                            
                        </div>

                        <div className="section">
                            <h3>Add a gift message</h3>
                            <textarea type="textarea" placeholder="This handwritten note will be delivered along with your beautifully wrapped gift"/>
                        </div>
                        
                        <div className="section">
                            <h3>Add promocode</h3>

                            <input type="text" placeholder="WELCOMEGIFT" />
                        </div>

                        <div className="section">
                            <button className="primary-btn">Continue to payment</button>
                        </div>



                    </div>

                </div>
            </div>
        </Main>
        </>

    )

}