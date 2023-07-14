import './breadcrumbs.css'
function Breadcrumbs() {
    return (
        <div className='breadcrumbs'>
            <div className='container'>
                <div className='row breadcrumbs__list'>
                    <div className='col-12'>
                        <ul>
                        <li><a className="breadcrumbs__list-main" href="">Home</a></li>
                            <li><img src='../assets/layouts/collection/breadcrumbs-seperator.svg' alt="Breadcrumb Icon Seperator"/></li>
                            <li><a className="breadcrumbs__list-current" href="">Silver collection</a></li>
                            <li><img src='../assets/layouts/collection/breadcrumbs-seperator.svg' alt="Breadcrumb Icon Seperator"/></li>
                            <li><a className="breadcrumbs__list-category" href="">A Box of Dallas</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumbs;