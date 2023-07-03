import './citytabs.css'
function CityTabs() {
    return (
       <div className='citytabs'>
           <div className='container'>
                <div className='row'>
                    <h2>select your city</h2>
                    <ul>
                        <li><a href="#">Dallas</a></li>
                        <li><a href="#">Kansas</a></li>
                        <li><a href="#">Other City</a></li>
                    </ul>
                </div>
            </div>
            <div className='citytabs__content'>
                <div className='container'>
                    <div className='row'>
                            <div className='col-4'>
                                <img src="../assets/layouts/dallas-img1.png" alt="Dallas1"/>
                                <div className='citytabs__category'>Food</div>
                                <h3>A Box of Dallas</h3>
                                <p>Luxury gift boxes created perfectly for any occasion featuring local products from Dallas, TX.</p>
                            </div>
                            <div className='col-4'>
                                <img src="../assets/layouts/dallas-img2.png" alt="Dallas2"/>
                                <div className='citytabs__category'>Jewelry</div>
                                <h3>Blue Print</h3>
                                <p>Blue Print is a furniture boutique offering a wide array of antiques, art and accessories to help designers and design-lovers create one-of-a-kind spaces.</p>
                            </div>
                            <div className='col-4'>
                                <img src="../assets/layouts/dallas-img3.png" alt="Dallas3"/>
                                <div className='citytabs__category'>Food</div>
                                <h3>Boxed Bites</h3>
                                <p>Thoughtful, elevated, boxed delicacies delivered for all occasions</p>
                            </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

export default CityTabs;
