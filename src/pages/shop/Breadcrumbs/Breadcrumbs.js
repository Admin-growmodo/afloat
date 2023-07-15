import './breadcrumbs.css'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
import {useNavigate} from 'react-router-dom';
>>>>>>> 362432c (Fix header spacing and breacrumbs linking)

function Breadcrumbs() {
    const navigate = useNavigate();
    return (
        <div className='breadcrumbs'>
            <div className='container'>
                <div className='row breadcrumbs__list'>
                    <div className='col-12'>
                        <ul>
                            <li><Link className="breadcrumbs__list-main" to="/homepage">Home</Link></li>
                            <li><img src='../assets/layouts/collection/breadcrumbs-seperator.svg' alt="Breadcrumb Icon Seperator"/></li>
                            <li><Link className="breadcrumbs__list-category" to="/collection">Afloat collection</Link></li>
                            <li><img src='../assets/layouts/collection/breadcrumbs-seperator.svg' alt="Breadcrumb Icon Seperator"/></li>
                            <li><Link className="breadcrumbs__list-current" to="/shop">A Box of Dallas</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumbs;