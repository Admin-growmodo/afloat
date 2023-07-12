import './related.css'
import { Link } from 'react-router-dom'
function Related() {
    return (
        <div className='related'>
            <div className='container'>
                <div className='row related__col-inner'>
                    <div className='related__col-title'>
                        <h3>You may also like</h3>
                    </div>

                    <div className='related__boxes-wrapper'>

                        <div className='col-3 related__boxes'>
                            <div className='related__filter-result--inner'>
                                <Link to="/product">
                                <div className='related__filter-result--innerwrap'>
                                    <div className='related__filter-result--img'>
                                        <img src='../assets/layouts/shop/welcome-home-gift-basket.png' alt="Dallas1" />
                                        <a className='add-to-cart-btn' href='#'><img src='../assets/layouts/shop/bag.svg' alt="Shop Bag" /></a>
                                    </div>
                                    <div className='related__filter-result--wrap'>
                                        <h3>Welcome Home Gift Basket</h3>
                                        <p>$189.00 USD</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className='col-3 related__boxes'>
                            <div className='related__filter-result--inner'>
                                <Link to="/product">
                                <div className='related__filter-result--innerwrap'>
                                    <div className='related__filter-result--img'>
                                        <img src='../assets/layouts/shop/i-do-gift-box.png' alt="Dallas1" />
                                        <a className='add-to-cart-btn' href='#'><img src='../assets/layouts/shop/bag.svg' alt="Shop Bag" /></a>
                                    </div>
                                    <div className='related__filter-result--wrap'>
                                        <h3>I Do Gift Box</h3>
                                        <p>$189.00 USD</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className='col-3 related__boxes'>
                            <div className='related__filter-result--inner'>
                                <Link to="/product">
                                <div className='related__filter-result--innerwrap'>
                                    <div className='related__filter-result--img'>
                                        <img src='../assets/layouts/shop/gentleman-gift-box.png' alt="Dallas1" />
                                        <a className='add-to-cart-btn' href='#'><img src='../assets/layouts/shop/bag.svg' alt="Shop Bag" /></a>
                                    </div>
                                    <div className='related__filter-result--wrap'>
                                        <h3>Gentleman Gift Box</h3>
                                        <p>$189.00 USD</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className='col-3 related__boxes'>
                            <div className='related__filter-result--inner'>
                                <Link to="/product">
                                <div className='related__filter-result--innerwrap'>
                                    <div className='related__filter-result--img'>
                                        <img src='../assets/layouts/shop/i-do-gift-box.png' alt="Dallas1" />
                                        <a className='add-to-cart-btn' href='#'><img src='../assets/layouts/shop/bag.svg' alt="Shop Bag" /></a>
                                    </div>
                                    <div className='related__filter-result--wrap'>
                                        <h3>I Do Gift Box</h3>
                                        <p>$189.00 USD</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Related;