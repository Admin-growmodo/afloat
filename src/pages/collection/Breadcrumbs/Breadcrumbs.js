import './breadcrumbs.css'
function Breadcrumbs() {
    return (
        <div className='breadcrumbs'>
            <div className='container'>
                <div className='row breadcrumbs__list'>
                    <div className='col-12'>
                        <ul>
                            <li><a class="breadcrumbs__list-main" href="">Home</a></li>
                            <li><img src='../assets/layouts/collection/breadcrumbs-seperator.svg' Alt="Breadcrumb Icon Seperator"/></li>
                            <li><a class="breadcrumbs__list-current" href="">Afloat collection</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumbs;