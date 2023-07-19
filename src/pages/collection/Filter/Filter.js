import './filter.css'
import { useState, useRef } from 'react';
import { FILTER_CONSTANTS, FILTER_CARDS } from './constants';
import { Link } from 'react-router-dom'

function Filter() {
    const store = Object.keys(FILTER_CONSTANTS)[2] || '';
    const storeSpace = store.replace(/([A-Z])/g, ' $1').trim();

    const [LocationClicked, setLocationClicked] = useState(false);
    const [OccasionClicked, setOccasionClicked] = useState(false);
    const [StoretypeClicked, setStoretypeClicked] = useState(false);

    const [showEmpty, setShowEmpty] = useState(false);


    const ref = useRef(null);

    const triggerLocationClicked = () => {
        setLocationClicked(!LocationClicked)
    }

    const triggerOccasionClicked = () => {
        setOccasionClicked(!OccasionClicked)
    }

    const triggerStoretypeClicked = () => {
        setStoretypeClicked(!StoretypeClicked)
    }
    // const handleClickOutside = (event) => {
    //     if (ref.current && !ref.current.contains(event.target)) {
    //         setLocationClicked(false);
    //         setOccasionClicked(false);
    //         setStoretypeClicked(false);
    //     }
    // };


    return (
        <div className='collection__filter'>
            <div className='container'>
                <div className='row collection__filter-col justify-content-between'>
                    <div className='col-3'>
                        <div className='sidebar--filter'>
                            <div className='sidebar__location'>
                                <span className='sidebar__label'>{Object.keys(FILTER_CONSTANTS)[0]}</span>
                                <span className={`sidebar__label-arrow ` + (LocationClicked ? '' : '')} onClick={() => triggerLocationClicked()}><img src='/assets/layouts/chevron-up.svg' alt="up arrow" /></span>
                                <div ref={ref} className={`sidebar__list-mobile ` + (LocationClicked ? 'show-list' : 'hide-list')}>
                                    <ul className='sidebar__list'>
                                        {FILTER_CONSTANTS.location.map((loc) => (
                                            <li><label><input onClick={e => {setShowEmpty(!showEmpty)}} type="radio" name="location-mobile"/>{loc}</label></li>
                                        ))}
                                    </ul>
                                </div>

                                <ul className='sidebar__list-desktop'>
                                    {FILTER_CARDS && FILTER_CONSTANTS.location.map((loc) => (
                                        <li><label><input onClick={e => {setShowEmpty(!showEmpty)}} type="radio" name="location"/>{loc}</label></li>
                                    ))}
                                </ul>

                            </div>
                            <div className='sidebar__occasion'>
                                <span className='sidebar__label'>{Object.keys(FILTER_CONSTANTS)[1]}</span>
                                <span className={`sidebar__label-arrow ` + (OccasionClicked ? '' : '')} onClick={() => triggerOccasionClicked()}><img src='/assets/layouts/chevron-up.svg' alt="arrow up" /></span>
                                <div ref={ref} className={`sidebar__list-mobile ` + (OccasionClicked ? 'show-list' : 'hide-list')}>
                                    <ul className='sidebar__list'>
                                        {FILTER_CONSTANTS.occasion.map((occ) => (
                                            <li><label><input type="checkbox" />{occ}</label></li>
                                        ))}
                                    </ul>
                                </div>

                                <ul className='sidebar__list-desktop'>
                                    {FILTER_CONSTANTS && FILTER_CONSTANTS.occasion.map((occ) => (
                                        <li><label><input type="checkbox" />{occ}</label></li>
                                    ))}
                                </ul>
                            </div>
                            <div className='sidebar__storetype'>
                                <span className='sidebar__label'>{storeSpace}</span>
                                <span className={`sidebar__label-arrow ` + (StoretypeClicked ? '' : '')} onClick={() => triggerStoretypeClicked()}><img src='/assets/layouts/chevron-up.svg' alt="arrow up" /></span>
                                <div ref={ref} className={`sidebar__list-mobile ` + (StoretypeClicked ? 'show-list' : 'hide-list')}>
                                    <ul className='sidebar__list'>
                                        {FILTER_CONSTANTS && FILTER_CONSTANTS.storeType.map((store) => (
                                            <li><label><input type="checkbox" />{store}</label></li>
                                        ))}
                                    </ul>
                                </div>

                                <ul className='sidebar__list-desktop'>
                                    {FILTER_CONSTANTS && FILTER_CONSTANTS.storeType.map((store) => (
                                        <li><label><input type="checkbox" />{store}</label></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='collection__filter-result'>
                            {showEmpty ? '' : FILTER_CARDS.map((card) => (
                                <div className='collection__filter-result--inner'>
                                    <Link to="/product">
                                        <div className='collection__filter-result--innerwrap'>
                                            <div className='collection__filter-result--img'>
                                                <img src={card.image} alt="Dallas1" />
                                            </div>
                                            <div className='collection__filter-result--wrap'>
                                                <div className='collection__category'><span>{card.category}</span></div>
                                                <h3>{card.title}</h3>
                                                <p>{card.content}</p>
                                            </div>
                                        </div>
                                    </Link>
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

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;