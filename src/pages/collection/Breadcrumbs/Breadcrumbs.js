import './breadcrumbs.css'
function Breadcrumbs() {
    return (
        <div className='breadcrumbs'>
            <div className='container'>
                <div className='row breadcrumbs__list'>
                    <div className='col-12'>
                        <ul>
                            <li>Home</li>
                            <li><img src='../assets/layouts/collection/breadcrumbs-seperator.svg' Alt="Breadcrumb Icon Seperator"/></li>
                            <li>Afloat collection</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumbs;