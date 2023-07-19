import './breadcrumbs.css'
import { Link } from 'react-router-dom'

function Breadcrumbs() {
    return (
        <div className='breadcrumbs'>
            <div className='container'>
                <div className='row breadcrumbs__list'>
                    <div className='col-12'>
                        <ul>
                            <li><Link className="breadcrumbs__list-main" to="/homepage">Home</Link></li>
                            <li><img src='../assets/layouts/collection/breadcrumbs-seperator.svg' alt="Breadcrumb Icon Seperator"/></li>
                            <li><Link className="breadcrumbs__list-current" to="/collection">Afloat collection</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumbs;