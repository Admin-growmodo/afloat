import '../styles/global/header.css'
function Header() {
  return (
    <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-3 logo">
                        <img src="../assets/layouts/afloat-logo.svg" alt="Logo" />
                    </div>
                    <div className="col-6 menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Afloat Collection</a></li>
                            <li><a href="#">for merchants</a></li>
                        </ul>
                    </div>
                    <div className="col-3 user__menu">
                        <ul>
                            <li><button className="primary-btn">Shop Now</button></li>
                            <li><a href="#"><img src="../assets/layouts/user-icon.svg" alt="User" /></a></li>
                            <li><a href="#"><img src="../assets/layouts/basket-icon.svg" alt="Basket" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Header;
