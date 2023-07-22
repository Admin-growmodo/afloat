import '../styles/global/footer.css';
import { Link } from 'react-router-dom';
import {useRef} from 'react';
function Footer() {
    const formFeedback = useRef(null);
    const newsLetterForm = useRef(null);
    const inputEmail = useRef(null);
    const inputZip = useRef(null);
    const formSubmitBtn = useRef(null);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const handleNewsLetterSignUp = (e) => {
        e.preventDefault();

        if (newsLetterForm.current.checkValidity() && (inputEmail.current.value.length > 0)) {

            formFeedback.current.style.visibility  = 'visible';
            inputEmail.current.disabled = true;
            inputZip.current.disabled = true;
            formSubmitBtn.current.style.cursor = 'default';

            /* Disaable submit button in appearance and funcionality*/
            formSubmitBtn.current.style.backgroundColor = '#586D82';

            
            formFeedback.current.removeEventListener('submit', handleNewsLetterSignUp);
        }
    }

  return (
    <footer>
      <div className="footer">
        <div className="footer__wrapper">
          <div className="container">
            <div className="row">
              <div className="col-3 footer__wrapper-col">
                <Link onClick={scrollToTop} to="/homepage"><img src="../assets/layouts/footer-logo.svg" alt="Footer Logo" /></Link>
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
                <form id="form-footer" ref={newsLetterForm} onSubmit={handleNewsLetterSignUp}>
                  <input required type="email" placeholder="Enter your email" ref={inputEmail}/>
                  <input required type="number" pattern="\d*" inputMode="numeric" placeholder="Enter your zipcode" ref={inputZip} />
                  <button ref={formSubmitBtn}className="primary-btn" type="submit">Send</button>
                </form>
                <span
                  className="form-feedback"
                  ref={formFeedback}
                >
                    E-mail successfully sent!
                </span>
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
