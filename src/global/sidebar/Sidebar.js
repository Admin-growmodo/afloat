import './sidebar.css'
import { SELECTED_PRODUCT } from '../product/Content/constant';
import Cart from '../cart/Cart';


function Sidebar({ show, triggerSidebar }) {
    let products = SELECTED_PRODUCT[0]
    if (!show) {
        return null;
    }

    return (
        <div className='sidebar__overlay'>
            <div className='sidebar'>
                <div className='sidebar__heading'>
                    <h3>Your cart</h3>
                    <button className='sidebar__close' onClick={() => triggerSidebar(false)}><img src='../assets/layouts/modal-close.svg' alt='Sidebar Close' /></button>
                </div>
                <div className='sidebar__text'>
                    <p>Our gift to you - use code WELCOMEGIFT for free delivery on your first gift sent with Afloat!</p>
                </div>
                <Cart product_images={products.images[0]} product_title={products.title} product_price={products.price} product_quanity={1}/>
                
            </div>
        </div>
    );
}

export default Sidebar;