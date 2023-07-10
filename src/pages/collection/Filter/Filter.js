import './filter.css'
import { useState, useRef } from 'react';

function Filter() {

    const [LocationClicked, setLocationClicked] = useState(false);
    const [OccasionClicked, setOccasionClicked] = useState(false);
    const [StoretypeClicked, setStoretypeClicked] = useState(false);

    const ref = useRef(null);

    const triggerLocationClicked = () =>{
        setLocationClicked(!LocationClicked)
    }

    const triggerOccasionClicked = () =>{
        setOccasionClicked(!OccasionClicked)
    }
    
    const triggerStoretypeClicked = () =>{
        setStoretypeClicked(!StoretypeClicked)
    }

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setLocationClicked(false);
            setOccasionClicked(false);
            setStoretypeClicked(false);
        }
    };
    

    return (
        <div className='collection__filter'>
            <div className='container'>
                <div className='row collection__filter-col justify-content-between'>
                    <div className='col-3'>
                        <div className='sidebar'>
                            <div className='sidebar__location'>
                                <span className='sidebar__label'>Location</span>
                                <span className={`sidebar__label-arrow ` + (LocationClicked ? '' : '')} onClick={() => triggerLocationClicked()}><img src='/assets/layouts/chevron-up.svg'/></span>
                                <div ref={ref} className={`sidebar__list-mobile ` + (LocationClicked ? 'show-list' : 'hide-list')}>
                                    <ul className='sidebar__list'>
                                        <li><input type="radio" />Dallas</li>
                                        <li><input type="radio" />Kansas City</li>
                                    </ul>
                                </div>

                                <ul className='sidebar__list-desktop'>
                                    <li><input type="radio" />Dallas</li>
                                    <li><input type="radio" />Kansas City</li>
                                </ul>

                            </div>
                            <div className='sidebar__occasion'>
                                <span className='sidebar__label'>Occasion</span>
                                <span className={`sidebar__label-arrow ` + (OccasionClicked ? '' : '')} onClick={() => triggerOccasionClicked()}><img src='/assets/layouts/chevron-up.svg'/></span>
                                <div ref={ref} className={`sidebar__list-mobile ` + (OccasionClicked ? 'show-list' : 'hide-list')}>
                                    <ul className='sidebar__list'>
                                        <li><input type="checkbox" />For her</li>
                                        <li><input type="checkbox" />For him</li>
                                        <li><input type="checkbox" />For baby</li>
                                        <li><input type="checkbox" />For kids</li>
                                        <li><input type="checkbox" />The happy couple</li>
                                        <li><input type="checkbox" />Housewarming</li>
                                        <li><input type="checkbox" />Just because</li>
                                        <li><input type="checkbox" />Hostess</li>
                                        <li><input type="checkbox" />Support</li>
                                        <li><input type="checkbox" />Thank you</li>
                                    </ul>
                                </div>

                                <ul className='sidebar__list-desktop'>
                                    <li><input type="checkbox" />For her</li>
                                    <li><input type="checkbox" />For him</li>
                                    <li><input type="checkbox" />For baby</li>
                                    <li><input type="checkbox" />For kids</li>
                                    <li><input type="checkbox" />The happy couple</li>
                                    <li><input type="checkbox" />Housewarming</li>
                                    <li><input type="checkbox" />Just because</li>
                                    <li><input type="checkbox" />Hostess</li>
                                    <li><input type="checkbox" />Support</li>
                                    <li><input type="checkbox" />Thank you</li>
                                </ul>
                            </div>
                            <div className='sidebar__storetype'>
                                <span className='sidebar__label'>Store Type</span>
                                <span className={`sidebar__label-arrow ` + (StoretypeClicked ? '' : '')} onClick={() => triggerStoretypeClicked()}><img src='/assets/layouts/chevron-up.svg'/></span>
                                <div ref={ref} className={`sidebar__list-mobile ` + (StoretypeClicked ? 'show-list' : 'hide-list')}>
                                    <ul className='sidebar__list'>
                                        <li><input type="checkbox" />bakery</li>
                                        <li><input type="checkbox" />balloons</li>
                                        <li><input type="checkbox" />botique</li>
                                        <li><input type="checkbox" />flowers</li>
                                        <li><input type="checkbox" />home goods</li>
                                        <li><input type="checkbox" />jewelry</li>
                                        <li><input type="checkbox" />self-care</li>
                                        <li><input type="checkbox" />other</li>
                                    </ul>
                                </div>

                                <ul className='sidebar__list-desktop'>
                                    <li><input type="checkbox" />bakery</li>
                                    <li><input type="checkbox" />balloons</li>
                                    <li><input type="checkbox" />botique</li>
                                    <li><input type="checkbox" />flowers</li>
                                    <li><input type="checkbox" />home goods</li>
                                    <li><input type="checkbox" />jewelry</li>
                                    <li><input type="checkbox" />self-care</li>
                                    <li><input type="checkbox" />other</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='collection__filter-result'>
                            <div className='collection__filter-result--inner'>
                                <div className='collection__filter-result--innerwrap'>
                                    <div className='collection__filter-result--img'>
                                        <img src="../assets/layouts/dallas-img1.png" alt="Dallas1"/>
                                    </div>
                                    <div className='collection__filter-result--wrap'>
                                        <div className='collection__category'><span>Food</span></div>
                                        <h3>A Box of Dallas</h3>
                                        <p>Luxury gift boxes created perfectly for any occasion featuring local products from Dallas, TX.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <div className='collection__filter-result--innerwrap'>
                                    <div className='collection__filter-result--img'>
                                        <img src="../assets/layouts/dallas-img2.png" alt="Dallas2"/>
                                    </div>
                                    <div className='collection__filter-result--wrap'>
                                        <div className='collection__category'><span>Jewelry</span></div>
                                        <h3>Blue Print</h3>
                                        <p>Blue Print is a furniture boutique offering a wide array of antiques, art and accessories to help designers and...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <div className='collection__filter-result--innerwrap'>
                                    <div className='collection__filter-result--img'>
                                        <img src="../assets/layouts/dallas-img3.png" alt="Dallas3"/>
                                    </div>
                                    <div className='collection__filter-result--wrap'>
                                        <div className='collection__category'><span>Food</span></div>
                                        <h3>Boxed Bites</h3>
                                        <p>Thoughtful, elevated, boxed delicacies delivered for all occasions</p>
                                    </div>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <div className='collection__filter-result--innerwrap'>
                                    <div className='collection__filter-result--img'>
                                        <img src="../assets/layouts/dallas-img2.png" alt="Dallas2"/>
                                    </div>
                                    <div className='collection__filter-result--wrap'>
                                        <div className='collection__category'><span>Jewelry</span></div>
                                        <h3>Blue Print</h3>
                                        <p>Blue Print is a furniture boutique offering a wide array of antiques, art and accessories to help designers and...</p>
                                    </div>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <div className='collection__filter-result--innerwrap'>
                                    <div className='collection__filter-result--img'>
                                        <img src="../assets/layouts/dallas-img3.png" alt="Dallas3"/>
                                    </div>
                                    <div className='collection__filter-result--wrap'>
                                        <div className='collection__category'><span>Food</span></div>
                                        <h3>Boxed Bites</h3>
                                        <p>Thoughtful, elevated, boxed delicacies delivered for all occasions</p>
                                    </div>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <div className='collection__filter-result--innerwrap'>
                                    <div className='collection__filter-result--img'>
                                        <img src="../assets/layouts/dallas-img1.png" alt="Dallas1"/>
                                    </div>
                                    <div className='collection__filter-result--wrap'>
                                        <div className='collection__category'><span>Food</span></div>
                                        <h3>A Box of Dallas</h3>
                                        <p>Luxury gift boxes created perfectly for any occasion featuring local products from Dallas, TX.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <div className='collection__filter-result--innerwrap'>
                                    <div className='collection__filter-result--img'>
                                        <img src="../assets/layouts/dallas-img3.png" alt="Dallas3"/>
                                    </div>
                                    <div className='collection__filter-result--wrap'>
                                        <div className='collection__category'><span>Food</span></div>
                                        <h3>Boxed Bites</h3>
                                        <p>Thoughtful, elevated, boxed delicacies delivered for all occasions</p>
                                    </div>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <div className='collection__filter-result--innerwrap'>
                                    <div className='collection__filter-result--img'>
                                        <img src="../assets/layouts/dallas-img1.png" alt="Dallas1"/>
                                    </div>
                                    <div className='collection__filter-result--wrap'>
                                        <div className='collection__category'><span>Food</span></div>
                                        <h3>A Box of Dallas</h3>
                                        <p>Luxury gift boxes created perfectly for any occasion featuring local products from Dallas, TX.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <div className='collection__filter-result--innerwrap'>
                                    <div className='collection__filter-result--img'>
                                        <img src="../assets/layouts/dallas-img2.png" alt="Dallas2"/>
                                    </div>
                                    <div className='collection__filter-result--wrap'>
                                        <div className='collection__category'><span>Jewelry</span></div>
                                        <h3>Blue Print</h3>
                                        <p>Blue Print is a furniture boutique offering a wide array of antiques, art and accessories to help designers and...</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;