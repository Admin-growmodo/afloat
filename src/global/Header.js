import '../styles/global/header.css'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import SignUp from '../global/modals/SignUp/SignUp'
import Login from '../global/modals/Login/Login'

function Header({ triggerSidebar }) {
    const ref = useRef(null);
    const [burgerClicked, setBurgerClicked] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    
    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

    const toggleShowLogin = () => {
        setShowLogin(!showLogin);
    };

    function openProfileClicked() {
        let x = !openProfile
        setOpenProfile(x);

    }

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setBurgerClicked(false);
        }
    };

    const [isDesktopSize, setIsDesktopSize] = useState(desktopToMobileView);

    function desktopToMobileView() {
        if (typeof window === 'undefined') {
            return true;
        }
        return window.innerWidth <= 1391;
    }
    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        function autoResize() {
            setIsDesktopSize(desktopToMobileView());
        }

        window.addEventListener('resize', autoResize);
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
            window.removeEventListener('resize', autoResize);
        };
    }, []);

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-3 logo">
                            <Link to='/homepage'><img src="../assets/layouts/afloat-logo.svg" alt="Logo" /></Link>
                        </div>
                        <div className="col-6 menu">

                            <div className={`menu__desktop`}>
                                <ul>
                                    <li><Link className='menu__active' to="/homepage">Home</Link></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><Link to="/collection">Afloat Collection</Link></li>
                                    <li><a href="#">for merchants</a></li>
                                </ul>
                            </div>
                            <div ref={ref} className={`menu__mobile ` + (burgerClicked ? 'show' : 'hide')}>
                                <ul>
                                    <li><a className='menu__active' href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Afloat Collection</a></li>
                                    <li><a href="#">for merchants</a></li>
                                    <li><Link className="primary-btn shop__now-btn" to="/shop">Shop Now</Link></li>
                                </ul>
                            </div>

                            <div className={`menu__mobile-icons ` + (isDesktopSize ? 'show' : 'hide')}>
                                <button className={`menu__hamburger ` + (burgerClicked ? 'hide' : 'show')} onClick={() => setBurgerClicked(true)}><svg viewBox="0 0 100 70" width="25" height="20"><rect width="100" height="5"></rect><rect y="30" width="100" height="5"></rect><rect y="60" width="100" height="5"></rect></svg></button>
                                <button className={`menu__close ` + (burgerClicked ? 'show' : 'hide')} onClick={() => setBurgerClicked(false)}><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.1286 22.1854L17.9431 17L23.1286 11.8145C23.2536 11.6895 23.3238 11.5199 23.3238 11.3431C23.3238 11.1663 23.2536 10.9968 23.1286 10.8717C23.0035 10.7467 22.834 10.6765 22.6572 10.6765C22.4804 10.6765 22.3108 10.7467 22.1858 10.8717L17.0003 16.0572L11.8149 10.8717C11.6898 10.7467 11.5203 10.6765 11.3435 10.6765C11.1666 10.6765 10.9971 10.7467 10.8721 10.8717C10.8085 10.9307 10.7582 11.0026 10.7248 11.0825C10.6913 11.1625 10.6754 11.2488 10.6781 11.3354C10.6807 11.4221 10.702 11.5072 10.7403 11.5849C10.7787 11.6627 10.8332 11.7314 10.9003 11.7863L16.0858 16.9717L10.8721 22.1854C10.747 22.3105 10.6768 22.48 10.6768 22.6568C10.6768 22.8337 10.747 23.0032 10.8721 23.1282C10.9971 23.2533 11.1666 23.3235 11.3435 23.3235C11.5203 23.3235 11.6898 23.2533 11.8149 23.1282L17.0003 17.9428L22.1858 23.1283C22.3108 23.2533 22.4804 23.3235 22.6572 23.3235C22.834 23.3235 23.0035 23.2533 23.1286 23.1283C23.2536 23.0032 23.3238 22.8337 23.3238 22.6568C23.3238 22.48 23.2536 22.3105 23.1286 22.1854Z" fill="#1C1B1F" /></svg></button>
                            </div>
                        </div>
                        <div className="col-3 user__menu">
                            <ul>
                                <li><Link className="primary-btn shop__now-btn" to="/shop">Shop Now</Link></li>
                                <li>
                                    <div onClick={() => openProfileClicked()} className='user__menu-btn' href="#"><svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.1665 5.83333C5.1665 3.16396 7.33046 1 9.99984 1C12.6692 1 14.8332 3.16396 14.8332 5.83333C14.8332 8.50271 12.6692 10.6667 9.99984 10.6667C7.33046 10.6667 5.1665 8.50271 5.1665 5.83333ZM9.99984 0C6.77818 0 4.1665 2.61167 4.1665 5.83333C4.1665 9.05499 6.77818 11.6667 9.99984 11.6667C13.2215 11.6667 15.8332 9.05499 15.8332 5.83333C15.8332 2.61167 13.2215 0 9.99984 0ZM1.1665 20.9444C1.1665 18.754 2.8946 17 4.99984 17H14.9998C17.1051 17 18.8332 18.754 18.8332 20.9444V22.6667H1.1665V20.9444ZM4.99984 16C2.3186 16 0.166504 18.2257 0.166504 20.9444V23.1667C0.166504 23.4428 0.390362 23.6667 0.666504 23.6667H19.3332C19.6093 23.6667 19.8332 23.4428 19.8332 23.1667V20.9444C19.8332 18.2257 17.6811 16 14.9998 16H4.99984Z" fill="black" /></svg>
                                        <div className={'user__menu-toggle ' + (openProfile ? 'open-profile' : '')}>
                                            {openProfile &&
                                                <ul>
                                                    <li><a className='user__menu-profile' href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.375 7C8.375 4.99797 9.99797 3.375 12 3.375C14.002 3.375 15.625 4.99797 15.625 7C15.625 9.00203 14.002 10.625 12 10.625C9.99797 10.625 8.375 9.00203 8.375 7ZM12 2.625C9.58375 2.625 7.625 4.58375 7.625 7C7.625 9.41625 9.58375 11.375 12 11.375C14.4162 11.375 16.375 9.41625 16.375 7C16.375 4.58375 14.4162 2.625 12 2.625ZM5.375 18.3333C5.375 16.6905 6.67107 15.375 8.25 15.375H15.75C17.3289 15.375 18.625 16.6905 18.625 18.3333V19.625H5.375V18.3333ZM8.25 14.625C6.23907 14.625 4.625 16.2943 4.625 18.3333V20C4.625 20.2071 4.79289 20.375 5 20.375H19C19.2071 20.375 19.375 20.2071 19.375 20V18.3333C19.375 16.2943 17.7609 14.625 15.75 14.625H8.25Z" fill="#999CA0" /></svg><span>Profile</span></a></li>
                                                    <li><a className='user__menu-orders' href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_585_2795)"><path d="M20.25 10.35C20.2195 9.26842 20.1171 8.57872 19.7703 7.9905C19.2765 7.15312 18.3881 6.687 16.6121 5.7564L14.9608 4.89015C13.511 4.13032 12.786 3.75 12.0066 3.75C11.2272 3.75 10.5023 4.1295 9.05239 4.89015L7.40107 5.7564C5.62508 6.687 4.73666 7.15312 4.24292 7.9905C3.75 8.82705 3.75 9.86902 3.75 11.9505V12.047C3.75 14.1302 3.75 15.1721 4.24292 16.0087C4.73666 16.846 5.62508 17.3122 7.40107 18.2436L9.05239 19.109C10.5023 19.8697 11.2272 20.25 12.0066 20.25C12.786 20.25 13.511 19.8705 14.9608 19.1098L16.6121 18.2436C18.3881 17.3122 19.2765 16.8469 19.7703 16.0095C20.1171 15.4213 20.2195 14.7316 20.25 13.65M19.4376 8.2875L16.1349 9.9375M16.1349 9.9375L15.7221 10.1437L12.0066 12M16.1349 9.9375V12.825M16.1349 9.9375L8.29113 5.8125M12.0066 12L4.57566 8.2875M12.0066 12V19.8375" stroke="#999CA0" strokeWidth="0.75" strokeLinecap="round" /></g><defs><clipPath id="clip0_585_2795"><rect width="18" height="18" fill="white" transform="translate(3 3)" /></clipPath></defs></svg><span>My orders</span></a></li>
                                                    <li><a className='user__menu-logout' href="#"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12L7.69231 12M7.69231 12L11.3846 8.30769M7.69231 12L11.3846 15.6923M9.53846 4L6.46154 4C5.10207 4 4 5.10207 4 6.46154L4 17.5385C4 18.8979 5.10207 20 6.46154 20L9.53846 20" stroke="#999CA0" strokeLinecap="round" strokeLinejoin="round" /></svg><span>Logout</span></a></li>
                                                    <li><button className='user__menu-signup' onClick={toggleShowModal}>Sign Up</button></li>
                                                    <li><button className='user__menu-login' onClick={toggleShowLogin}>Login</button></li>
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <button className='user__menu-cart' onClick={() => triggerSidebar(true)}><svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.49984 4.5C6.49984 2.567 8.06684 1 9.99984 1C11.9328 1 13.4998 2.567 13.4998 4.5V5.33333H6.49984V4.5ZM5.49984 6.33333V8.5C5.49984 8.77614 5.7237 9 5.99984 9C6.27598 9 6.49984 8.77614 6.49984 8.5V6.33333H13.4998V8.5C13.4998 8.77614 13.7237 9 13.9998 9C14.276 9 14.4998 8.77614 14.4998 8.5V6.33333H17.5368L18.7932 22.6667H1.20644L2.46285 6.33333H5.49984ZM5.49984 5.33333V4.5C5.49984 2.01472 7.51456 0 9.99984 0C12.4851 0 14.4998 2.01472 14.4998 4.5V5.33333H17.9998C18.2611 5.33333 18.4783 5.53449 18.4984 5.79498L19.8317 23.1283C19.8424 23.2672 19.7947 23.4042 19.7 23.5064C19.6054 23.6086 19.4724 23.6667 19.3332 23.6667H0.666505C0.527233 23.6667 0.394272 23.6086 0.299644 23.5064C0.205016 23.4042 0.157296 23.2672 0.167978 23.1283L1.50131 5.79498C1.52135 5.53449 1.73857 5.33333 1.99984 5.33333H5.49984Z" fill="black" /></svg></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <SignUp show={showModal} onCloseButtonClick={toggleShowModal} />
            <Login show={showLogin} onCloseButtonClick={toggleShowLogin} />
        </>
    );
}

// function getWindowSize() {
//     const { innerWidth, innerHeight } = window;
//     return { innerWidth, innerHeight };
// }

export default Header;
