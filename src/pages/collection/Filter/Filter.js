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
                        <div className='sidebar'>
                            <div className='sidebar__location'>
                                <span className='sidebar__label'>{Object.keys(FILTER_CONSTANTS)[0]}</span>
                                <span className={`sidebar__label-arrow ` + (LocationClicked ? '' : '')} onClick={() => triggerLocationClicked()}><img src='/assets/layouts/chevron-up.svg' alt="up arrow" /></span>
                                <div ref={ref} className={`sidebar__list-mobile ` + (LocationClicked ? 'show-list' : 'hide-list')}>
                                    <ul className='sidebar__list'>
                                        {FILTER_CONSTANTS.location.map((loc) => (
                                            <li><label><input type="radio" name="location-mobile"/>{loc}</label></li>
                                        ))}
                                    </ul>
                                </div>

                                <ul className='sidebar__list-desktop'>
                                    {FILTER_CARDS && FILTER_CONSTANTS.location.map((loc) => (
                                        <li><label><input type="radio" name="location"/>{loc}</label></li>
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
                            {FILTER_CARDS && FILTER_CARDS.map((card) => (
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
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;