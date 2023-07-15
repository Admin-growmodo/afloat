import './filter.css'
import { useState, useRef } from 'react';
import { FILTER_SORT, FILTER_PRODUCT, FILTER_CONSTANTS, FILTER_CARDS } from './constants';
import { Link } from 'react-router-dom'
import EmptyResult from '../../../global/EmptyResult';

function Filter() {
    const store = Object.keys(FILTER_CONSTANTS)[2] || '';
    const storeSpace = store.replace(/([A-Z])/g, ' $1').trim();



    const [SortClicked, setSortClicked] = useState(false);
    const [LocationClicked, setLocationClicked] = useState(false);
    const [StoretypeClicked, setStoretypeClicked] = useState(false);
    const [OccasionClicked, setOccasionClicked] = useState(false);

    const [showEmpty, setShowEmpty] = useState(false);

    const ref = useRef(null);

    const triggerLocationClicked = () => {
        setLocationClicked(!LocationClicked)
    }

    const triggerSortClicked = () => {
        setSortClicked(!SortClicked)
    }

    const triggerOccasionClicked = () => {
        setOccasionClicked(!OccasionClicked)
    }

    const triggerStoretypeClicked = () => {
        setStoretypeClicked(!StoretypeClicked)
    }

    return (
        <div className='shop__filter'>
            <div className='container'>
                <div className='row shop__filter-col justify-content-between'>
                    <div className='col-3'>
                        <div className='sidebar--filter'>
                            <div className='sidebar__location'>
                                <span className='sidebar__label'>{Object.keys(FILTER_SORT)[0]}</span>
                                <span className={`sidebar__label-arrow ` + (SortClicked ? '' : '')} onClick={() => triggerSortClicked()}><img src='/assets/layouts/chevron-up.svg' alt="up arrow" /></span>
                                <div ref={ref} className={`sidebar__list-mobile ` + (SortClicked ? 'show-list' : 'hide-list')}>
                                    <ul className='sidebar__list'>
                                        {FILTER_SORT.sort.map((loc) => (
                                            <li><label><input type="radio" name="sort-mobile"/>{loc}</label></li>
                                        ))}
                                    </ul>
                                </div>

                                <ul style={{marginBottom: '80px'}} className='sidebar__list-desktop'>
                                    {FILTER_PRODUCT && FILTER_SORT.sort.map((loc) => (
                                        <li><label><input type="radio" name="sort"/>{loc}</label></li>
                                    ))}
                                </ul>

                            </div>

                            <div className='sidebar__occasion'>
                                <span className='sidebar__label'>{Object.keys(FILTER_SORT)[1]}</span>
                                <span className={`sidebar__label-arrow ` + (OccasionClicked ? '' : '')} onClick={() => triggerOccasionClicked()}><img src='/assets/layouts/chevron-up.svg' alt="arrow up" /></span>
                                <div ref={ref} className={`sidebar__list-mobile ` + (OccasionClicked ? 'show-list' : 'hide-list')}>
                                    <ul className='sidebar__list'>
                                        {FILTER_SORT.occasion.map((occ) => (
                                            <li><label><input type="checkbox" />{occ}</label></li>
                                        ))}
                                    </ul>
                                </div>

                                <ul className='sidebar__list-desktop'>
                                    {FILTER_SORT && FILTER_SORT.occasion.map((occ) => (
                                        <li><label><input type="checkbox" />{occ}</label></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-9'>
                        <div className='shop__filter-result'>
                            {showEmpty ? '' : FILTER_PRODUCT.map((product) => (
                                <div className='shop__filter-result--inner'>

                                    <div className='shop__filter-result--innerwrap'>
                                        <div className='shop__filter-result--img'>
                                            <Link to="/product"><img src={product.image} alt="Dallas1" /></Link>
                                            <a className='add-to-cart-btn' href='#'><img src='../assets/layouts/shop/bag.svg' /></a>
                                        </div>
                                        <div className='shop__filter-result--wrap'>
                                            <Link to="/product"><h3>{product.product_title}</h3></Link>
                                            <p>{product.product_price}</p>
                                        </div>
                                    </div>

                                </div>
                            ))}

                            {!showEmpty ? '' : 
                                <div className="shop__filter-result-empty-inner">
                                    <span>0 products found with these opitons</span>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
                                            <path d="M59.2827 57.32L59.2871 57.3243C59.5684 57.5995 59.6499 57.8857 59.6308 58.143C59.6108 58.4147 59.4744 58.6945 59.2511 58.9162C59.028 59.1378 58.7448 59.2747 58.4666 59.2947C58.202 59.3137 57.9074 59.2304 57.6237 58.9466L45.1237 46.4466L44.7949 46.1179L44.4432 46.4219C39.864 50.3796 33.8791 52.7669 27.4035 52.7669C13.0463 52.7669 1.37012 41.0907 1.37012 26.7335C1.37012 12.3763 13.0463 0.700195 27.4035 0.700195C41.7606 0.700195 53.4368 12.3763 53.4368 26.7335V26.7342C53.4451 33.1495 51.0674 39.3387 46.7658 44.0983L46.4475 44.4505L46.7828 44.7866L59.2828 57.3199L59.2827 57.32ZM27.4001 3.03353C14.3578 3.03353 3.70012 13.6569 3.70012 26.7335C3.70012 39.8101 14.3578 50.4335 27.4001 50.4335C40.4763 50.4335 51.1001 39.8097 51.1001 26.7335C51.1001 13.6574 40.4763 3.03353 27.4001 3.03353Z" fill="#CCCCCC" stroke="#CCCCCC" />
                                        </svg>
                                    </div>
                                </div>
                                
                            }
                        </div>
                        {FILTER_PRODUCT.length === 0 &&
                            <EmptyResult/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;