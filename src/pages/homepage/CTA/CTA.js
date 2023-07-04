import './cta.css'
function CTA() {
    return (

       <div className='cta'>
           <div className='container'>
                <div className='row cta__title'>
                    <div className='col-12 cta__title-wrap'>
                        <img src="../assets/layouts/asterisk-graphic.svg" alt="Asterisk Graphic" />
                            <h2>gift, gift hooray</h2>
                        <img className="cta__title-wrap--shine" src="../assets/layouts/shine-graphic-cta.svg" alt="Shine Graphic CTA" />
                    </div>
                </div>
                <div className='row cta__content'>
                    <div className='col-12 cta__content-wrap'>
                        <p>Send gifts from your favorite local stores to the people you love, all on the Afloat app.</p>
                    </div>
                </div>
                <div className='row cta__content-img'>
                    <div className='col-12 cta__content-img--wrap'>
                        <div className='col-4'>
                            <img  className='cta__shine-appstore' src="../assets/layouts/cta-shine-appstore.svg" alt="CTA Shine App Store" />
                        </div>
                        <div className='col-4'>
                            <img className='cta__app-store' src="../assets/layouts/app-store.svg" alt="App Store" />
                        </div>
                        <div className='col-4'>
                            <img className='cta__smile' src="../assets/layouts/cta-smile.svg" alt="CTA Smile" />
                        </div>
                    </div>
                </div>
            </div>
       </div>
  
    );
}

export default CTA;
