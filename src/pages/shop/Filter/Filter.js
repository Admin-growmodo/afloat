import './filter.css'
import { useState, useRef } from 'react';
import { FILTER_SORT, FILTER_PRODUCT } from './constants';
import { Link } from 'react-router-dom'
import EmptyResult from '../../../global/EmptyResult';

function Filter() {
    // const store = Object.keys(FILTER_SORT)[2] || '';
    // const storeSpace = store.replace(/([A-Z])/g, ' $1').trim();

    const [SortClicked, setSortClicked] = useState(false);
    const [OccasionClicked, setOccasionClicked] = useState(false);

    const ref = useRef(null);

    const triggerSortClicked = () => {
        setSortClicked(!SortClicked)
    }

    const triggerOccasionClicked = () => {
        setOccasionClicked(!OccasionClicked)
    }

    return (
        <div className='shop__filter'>
            <div className='container'>
                <div className='row shop__filter-col justify-content-between'>
                    <div className='col-3'>
                        <div className='sidebar'>
                            <div className='sidebar__location'>
                                <span className='sidebar__label'>{Object.keys(FILTER_SORT)[0]}</span>
                                <span className={`sidebar__label-arrow ` + (SortClicked ? '' : '')} onClick={() => triggerSortClicked()}><img src='/assets/layouts/chevron-up.svg' alt="up arrow" /></span>
                                <div ref={ref} className={`sidebar__list-mobile ` + (SortClicked ? 'show-list' : 'hide-list')}>
                                    <ul className='sidebar__list'>
                                        {FILTER_SORT.sort.map((loc) => (
                                            <li><label><input type="radio" />{loc}</label></li>
                                        ))}
                                    </ul>
                                </div>

                                <ul className='sidebar__list-desktop'>
                                    {FILTER_PRODUCT && FILTER_SORT.sort.map((loc) => (
                                        <li><label><input type="radio" />{loc}</label></li>
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
                            {FILTER_PRODUCT && FILTER_PRODUCT.map((product) => (
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