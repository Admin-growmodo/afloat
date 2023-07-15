import './breadcrumbs.css'
import {useNavigate} from 'react-router-dom';

function Breadcrumbs() {
    const navigate = useNavigate();
    return (
        <div className='breadcrumbs'>
            <div className='container'>
                <div className='row breadcrumbs__list'>
                    <div className='col-12'>
                        <ul>
                            <li><a onClick={e => {navigate('/homepage')}} className="breadcrumbs__list-main" href="">Home</a></li>
                            <li><img src='../assets/layouts/collection/breadcrumbs-seperator.svg' alt="Breadcrumb Icon Seperator"/></li>
                            <li><a className="breadcrumbs__list-current" href="">Afloat collection</a></li>
                            <li><img src='../assets/layouts/collection/breadcrumbs-seperator.svg' alt="Breadcrumb Icon Seperator"/></li>
                            <li><a onClick={e => {navigate('/shop')}} className="breadcrumbs__list-category" href="">A Box of Dallas</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumbs;