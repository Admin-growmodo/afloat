import '../styles/global/footer.css'
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__wrapper">
          <div className="container">
            <div className="row">
              <div className="col-3 footer__wrapper-col">
                <img src="../assets/layouts/footer-logo.svg" alt="Footer Logo" />
                <p>3738 Haggar Way Dallas, TX 12345</p>
                <div className="social__icons">
                  <img src="../assets/layouts/instagram.svg" />
                  <img src="../assets/layouts/twitter.svg" />
                  <img src="../assets/layouts/facebook.svg" />
                  <img src="../assets/layouts/pinterest.svg" />
                  <img src="../assets/layouts/linkedin.svg" />
                </div>
              </div>
              <div className="col-3 footer__wrapper-col">
                <h3>Menu</h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Stores apply here!</a></li>
                </ul>
              </div>
              <div className="col-3 footer__wrapper-col">
                <h3>Resources</h3>
                <ul>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div className="col-3 footer__wrapper-col">
                <h2>TREAT YO'SELF.</h2>
                <span>Gift us your email for the insider scoop on new store, products and giveaways.</span>
                <form id="form-footer">
                  <input type="email" placeholder="Enter your email" />
                  <input type="text" placeholder="Enter your zipcode" />
                  <button className="primary-btn" type="submit">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p>© 2020-2023 afloat. All rights reserved. This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
