import './banner.css'
function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="row banner__container">
                    <div className="col-6 banner__container-col">
                        <h1>Say hello to gifting at your fingertips!</h1>
                        <h2>DID WE MENTION IT'S SAME-DAY DELIVERY?</h2>
                        <div className="banner__form">
                            <div className="banner__form-info">
                                <span>Quick gift finder</span>
                            </div>
                            <form>
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
                                <button type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-6 banner__container-col">
                        <img src="../assets/layouts/banner-image.png" alt="Banner Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
