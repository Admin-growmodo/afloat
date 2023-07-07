import './filter.css'
function Filter() {
    return (
        <div className='collection__filter'>
            <div className='container'>
                <div className='row collection__filter-col'>
                    <div className='col-3'>
                        <div className='sidebar'>
                            <div className='sidebar__location'>
                                <span>Location</span>
                                <ul>
                                    <li><input type="radio" />Dallas</li>
                                    <li><input type="radio" />Kansas City</li>
                                </ul>
                            </div>
                            <div className='sidebar__occasion'>
                                <span>Occasion</span>
                                <ul>
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
                                <span>Store Type</span>
                                <ul>
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
                                <img src="../assets/layouts/dallas-img1.png" alt="Dallas1"/>
                                <div className='citytabs__content-col--wrap'>
                                    <div className='citytabs__category'><span>Food</span></div>
                                    <h3>A Box of Dallas</h3>
                                    <p>Luxury gift boxes created perfectly for any occasion featuring local products from Dallas, TX.</p>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <img src="../assets/layouts/dallas-img2.png" alt="Dallas2"/>
                                <div className='citytabs__content-col--wrap'>
                                    <div className='citytabs__category'><span>Jewelry</span></div>
                                    <h3>Blue Print</h3>
                                    <p>Blue Print is a furniture boutique offering a wide array of antiques, art and accessories to help designers and...</p>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <img src="../assets/layouts/dallas-img3.png" alt="Dallas3"/>
                                <div className='citytabs__content-col--wrap'>
                                    <div className='citytabs__category'><span>Food</span></div>
                                    <h3>Boxed Bites</h3>
                                    <p>Thoughtful, elevated, boxed delicacies delivered for all occasions</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='collection__filter-result'>
                            <div className='collection__filter-result--inner'>
                                <img src="../assets/layouts/dallas-img1.png" alt="Dallas1"/>
                                <div className='citytabs__content-col--wrap'>
                                    <div className='citytabs__category'><span>Food</span></div>
                                    <h3>A Box of Dallas</h3>
                                    <p>Luxury gift boxes created perfectly for any occasion featuring local products from Dallas, TX.</p>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <img src="../assets/layouts/dallas-img2.png" alt="Dallas2"/>
                                <div className='citytabs__content-col--wrap'>
                                    <div className='citytabs__category'><span>Jewelry</span></div>
                                    <h3>Blue Print</h3>
                                    <p>Blue Print is a furniture boutique offering a wide array of antiques, art and accessories to help designers and...</p>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <img src="../assets/layouts/dallas-img3.png" alt="Dallas3"/>
                                <div className='citytabs__content-col--wrap'>
                                    <div className='citytabs__category'><span>Food</span></div>
                                    <h3>Boxed Bites</h3>
                                    <p>Thoughtful, elevated, boxed delicacies delivered for all occasions</p>
                                </div>
                            </div>
                        </div>

                        <div className='collection__filter-result'>
                            <div className='collection__filter-result--inner'>
                                <img src="../assets/layouts/dallas-img1.png" alt="Dallas1"/>
                                <div className='citytabs__content-col--wrap'>
                                    <div className='citytabs__category'><span>Food</span></div>
                                    <h3>A Box of Dallas</h3>
                                    <p>Luxury gift boxes created perfectly for any occasion featuring local products from Dallas, TX.</p>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <img src="../assets/layouts/dallas-img2.png" alt="Dallas2"/>
                                <div className='citytabs__content-col--wrap'>
                                    <div className='citytabs__category'><span>Jewelry</span></div>
                                    <h3>Blue Print</h3>
                                    <p>Blue Print is a furniture boutique offering a wide array of antiques, art and accessories to help designers and...</p>
                                </div>
                            </div>
                            <div className='collection__filter-result--inner'>
                                <img src="../assets/layouts/dallas-img3.png" alt="Dallas3"/>
                                <div className='citytabs__content-col--wrap'>
                                    <div className='citytabs__category'><span>Food</span></div>
                                    <h3>Boxed Bites</h3>
                                    <p>Thoughtful, elevated, boxed delicacies delivered for all occasions</p>
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