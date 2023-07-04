import './banner.css'
function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="row banner__container">
                    <div className="col-6 banner__container-col">
                        <h1>Say <span className="banner__accent">hello</span> to gifting at your <span className="banner__italic">fingertips</span>!</h1>
                        <div className='banner__text-wrap'>
                            <img className='shine01' src="../assets/layouts/shine-graphic01.svg" alt="Shine 01" />
                                <h2>DID WE MENTION IT'S SAME-DAY DELIVERY?</h2>
                            <img className='shine02' src="../assets/layouts/shine-graphic02.svg" alt="Shine 02" />
                        </div>
                        <div className="banner__form">
                            <div className="banner__form-info">
                                <span>Quick gift finder</span>
                                <img className='banner-arrow' src="../assets/layouts/banner-arrow.svg" alt="Banner Arrow" />
                            </div>
                            <form id="form-banner">
                                <div className="banner__form-col">
                                    <label>Where's is it going?</label>
                                    <select>
                                        <option>Dallas</option>
                                        <option>Kansas</option>
                                        <option>Dallas</option>
                                    </select>
                                </div>
                                <div className="banner__form-col">
                                    <label>Occasion</label>
                                    <select>
                                        <option>Featured Holiday</option>
                                        <option>Featured Holiday</option>
                                        <option>Featured Holiday</option>
                                    </select>
                                </div>
                                <div className="banner__form-col">
                                    <button className='primary-btn' type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-6 banner__container-col">
                        <img src="../assets/layouts/banner-image.png" alt="Banner" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
