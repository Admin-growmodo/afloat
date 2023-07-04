import './featured.css'
function Featured() {
    return (
       <div className='featured'>
           <div className='container'>
                <div className='row featured__title'>
                    <div className='col-12 featured__title-wrap'>
                        <h2>as seen on</h2>
                    </div>
                </div>
                <div className='row featured__logo'>
                    <div className='col-4 featured__logo-col'>
                        <img src="../assets/layouts/kc-journal-logo.svg" />
                    </div>
                    <div className='col-4 featured__logo-col'>
                        <img src="../assets/layouts/real-simple-logo.svg" />
                    </div>
                    <div className='col-4 featured__logo-col'>
                        <img src="../assets/layouts/live-kelly-ryan-logo.svg" />
                    </div>
                </div>
            </div>
       </div>
    );
}

export default Featured;
