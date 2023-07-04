import './citytabs.css'
function CityTabs() {
    return (
       <div className='citytabs'>
           <div className='container'>
                <div className='row'>
                    <h2>select your city</h2>
                    <ul className='citytabs__navigation'>
                        <li><a className='tabs_active' href="#">Dallas</a></li>
                        <li><a href="#">Kansas</a></li>
                        <li><a className='tabs_new' href="#">Other City</a></li>
                    </ul>
                </div>
            </div>
            <div className='citytabs__content'>
                <div className='container'>
                    <div className='row citytabs__content-wrapper'>
                            <div className='col-4 citytabs__content-col'>
                                <img src="../assets/layouts/dallas-img1.png" alt="Dallas1"/>
                                <div className='citytabs__content-col--wrap'>
                                    <div className='citytabs__category'><span>Food</span></div>
                                    <h3>A Box of Dallas</h3>
                                    <p>Luxury gift boxes created perfectly for any occasion featuring local products from Dallas, TX.</p>
                                </div>
                            </div>
                            <div className='col-4 citytabs__content-col'>
                                <img src="../assets/layouts/dallas-img2.png" alt="Dallas2"/>
                                <div className='citytabs__content-col--wrap'>
                                    <div className='citytabs__category'><span>Jewelry</span></div>
                                    <h3>Blue Print</h3>
                                    <p>Blue Print is a furniture boutique offering a wide array of antiques, art and accessories to help designers and...</p>
                                </div>
                            </div>
                            <div className='col-4 citytabs__content-col'>
                                <img src="../assets/layouts/dallas-img3.png" alt="Dallas3"/>
                                <div className='citytabs__content-col--wrap'>
                                    <div className='citytabs__category'><span>Food</span></div>
                                    <h3>Boxed Bites</h3>
                                    <p>Thoughtful, elevated, boxed delicacies delivered for all occasions</p>
                                </div>
                            </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 citytabs__content-btn'>
                            <button className='primary-btn'>Explore for more</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default CityTabs;
